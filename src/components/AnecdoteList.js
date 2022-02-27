import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotificationMsg, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
const dispatch = useDispatch()
  const vote = (anecdote) => {
    dispatch(addVote(anecdote.id))
    dispatch(setNotificationMsg({message: `you voted for ${anecdote.content}`}))
    setTimeout(() => dispatch(clearNotification()), 3000)
  }

  const anecdotes = useSelector(state => state.anecdotes.slice())
  anecdotes.sort((a, b)=> b.votes - a.votes)
    
    return (
      <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      </>      
      )
}

export default AnecdoteList
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const filter = useSelector(state => state.filter)
  let anecdotes = useSelector(state => state.anecdotes.slice())
    .filter(a => a.content?.includes(filter))
    .sort((a, b)=> b.votes - a.votes)

    return (
      <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(addVote(anecdote))}>
              vote
            </button>
          </div>
        </div>
      )}
      </>      
      )
}

export default AnecdoteList
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
const dispatch = useDispatch()
  const vote = (id) => {
    dispatch(addVote(id))
  }

  const anecdotes = useSelector(state => state)
return anecdotes.sort((a, b)=> b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )
}

export default AnecdoteList
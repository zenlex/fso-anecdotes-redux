import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    return(
      <div>
      <h2>create new</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        const content = e.target.elements.content.value
        dispatch(addAnecdote(content))
      }}>
        <div><input name="content"/></div>
        <button type="submit">create</button>
      </form>
      </div>
    )
}

export default AnecdoteForm
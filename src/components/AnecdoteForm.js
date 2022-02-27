import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer';
import anecdoteService from '../services/anecdotes'
import { clearNotification, setNotificationMsg } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch();

    return(
      <div>
      <h2>create new</h2>
      <form onSubmit={async (e) => {
        e.preventDefault()
        const content = e.target.elements.content.value
        const returnedNote = await anecdoteService.create(content)
        console.log('returned note:', returnedNote)
        dispatch(addAnecdote(returnedNote))
        dispatch(setNotificationMsg({message: `${content} added successfully`}))
        setTimeout(() => dispatch(clearNotification()), 3000)
      }}>
        <div><input name="content"/></div>
        <button type="submit">create</button>
      </form>
      </div>
    )
}

export default AnecdoteForm
import { connect } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = ({addAnecdote}) => {

    return(
      <div>
      <h2>create new</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        const content = e.target.elements.content.value
        addAnecdote(content)
      }}>
        <div><input name="content"/></div>
        <button type="submit">create</button>
      </form>
      </div>
    )
}

const mapDispatchToProps = {
  addAnecdote,
}
export default connect(null, mapDispatchToProps)(AnecdoteForm)
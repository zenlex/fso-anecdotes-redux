import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const initialState = [];

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    setAnecdotes(state, action){
      return action.payload
    },

    addAnecdote(state, action){
      const anecdote = action.payload
      return [...state, anecdote]
    },

    addVote(state, action){
      const id = action.payload
      const anecdote = state.find(a => a.id === id )
      const updatedAnecdote = {...anecdote, votes: anecdote.votes + 1}
      return state.map( a => a.id !== id ? a : updatedAnecdote)
    }
  }

})

export const { addVote, addAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () =>{
  return async dispatch => {
      const anecdotes = await anecdoteService.getAll()
      dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer



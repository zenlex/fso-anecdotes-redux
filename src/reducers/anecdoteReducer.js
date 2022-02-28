import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'
import { setNotificationMsg, clearNotification } from "./notificationReducer";

const initialState = [];

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    setAnecdotes(state, action){
      return action.payload
    },

    appendAnecdote(state, action){
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

export const { addVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const addAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch(appendAnecdote(newAnecdote))
        dispatch(setNotificationMsg({message: `${content} added successfully`}))
        setTimeout(() => dispatch(clearNotification()), 3000)
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
      const anecdotes = await anecdoteService.getAll()
      dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer



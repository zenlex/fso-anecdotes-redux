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

    updateAnecdote(state, action){
      return state.map( a => a.id !== action.payload.id ? a : action.payload)
    }
  }
})

export const { updateAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

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

export const addVote = (anecdote) => {
  return async dispatch => {
    const updated = {...anecdote, votes: anecdote.votes + 1}
    const returnedAnecdote = await anecdoteService.update(updated)
    dispatch(updateAnecdote(returnedAnecdote))
    dispatch(setNotificationMsg({message: `you voted for ${returnedAnecdote.content}`}))
    setTimeout(() => dispatch(clearNotification()), 3000)
  }
}

export default anecdoteSlice.reducer



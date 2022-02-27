import { createSlice } from "@reduxjs/toolkit"

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const anecdotesAtStart = []
// const getId = () => (100000 * Math.random()).toFixed(0)


const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

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
      return [...state, asObject(anecdote)]
    },

    addVote(state, action){
      const id = action.payload
      const anecdote = state.find(a => a.id === id )
      const updatedAnecdote = {...anecdote, votes: anecdote.votes + 1}
      return state.map( a => a.id !== id ? a : updatedAnecdote)
    }
  }

})

// const reducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch(action.type){
//     case 'ADD_VOTE':{
//       const id= action.data
//       const anecdote = state.find(a => a.id === id )
//       const updatedAnecdote = {...anecdote, votes: anecdote.votes + 1}
//       const newState = [...state.filter( a => a.id !== id), updatedAnecdote]
//       return newState;
//     }

//     case 'ADD_ANECDOTE':{
//       return [...state, asObject(action.data)];
//     }

//     default: 
//       return state;

//   }
// }

export const { addVote, addAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer



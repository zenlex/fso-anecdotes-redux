import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name:'filters',
  initialState:'',
  reducers:{
    setFilter(state, action){
      return action.payload
    },

    clearFilter(state, action){
      return ''
    }
    
  }
})

export const {setFilter, clearFilter} = filterSlice.actions
export default filterSlice.reducer
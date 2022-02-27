import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: null,
  reducers:{
    setNotificationMsg(state, action){
      return action.payload
    }, 
    clearNotification(state, action){
      return null
    }
  }
})

export const { setNotificationMsg, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer
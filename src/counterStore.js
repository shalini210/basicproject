import { configureStore } from '@reduxjs/toolkit'
import CR from './slices/CounterSlice'
import AC from './slices/AccountSlice'
import UC from './slices/UserSlice'
export const store = configureStore({
  reducer: {CR,AC,UC},
})
import { configureStore } from '@reduxjs/toolkit'
import CR from './slices/CounterSlice'
import AC from './slices/AccountSlice'
export const store = configureStore({
  reducer: {CR,AC},
})
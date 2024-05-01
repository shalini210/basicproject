import { configureStore } from '@reduxjs/toolkit'
import CR from './slices/CounterSlice'
export const store = configureStore({
  reducer: {CR},
})
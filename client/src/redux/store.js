import { configureStore,  } from '@reduxjs/toolkit'
import itemReducer  from './itemsReducer/itemReducer.js';

export const store = configureStore({
  reducer: {
    item : itemReducer
  },
})


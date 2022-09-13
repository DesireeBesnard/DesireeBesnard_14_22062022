import { configureStore, combineReducers } from '@reduxjs/toolkit';
import employeesReducer from '../features/employees/employeeSlice.js';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  employees: employeesReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
})




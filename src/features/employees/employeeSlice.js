import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, payload) => {
      state.push(payload.payload)
    },
    deleteEmployee: (state, payload) => {
      const index = state.findIndex(employee => {
        return employee.firstName === payload.firstName && employee.birthDate === payload.birthDay 
      })
      if(index !== -1) {
        state.splice(index, 1)
      }
    }
  }
});

export const { addEmployee, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;

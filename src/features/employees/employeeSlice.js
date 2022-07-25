import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: []
};


export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, payload) => {
      state.employees.push(payload)
    },
    deleteEmployee: (state, payload) => {
      const index = state.employees.findIndex(employee => {
        return employee.firstName === payload.firstName && employee.birthDate === payload.birthDay 
      })
      if(index > -1) {
        state.employees.splice(index, 1)
      }
    }
  }
});

export const { addEmployees, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;

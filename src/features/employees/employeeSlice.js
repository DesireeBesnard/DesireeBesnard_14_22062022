import { createSlice } from '@reduxjs/toolkit';

//const initialState = []
const initialState = {
  employees: [],
  showEditModal: false
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, payload) => {
      state.employees.push(payload.payload)
    },
    showEditModal: (state, payload) => {
      state.showEditModal = payload.payload
    },
    deleteEmployee: (state, payload) => {
      const index = state.employees.findIndex(employee => {
        return employee.firstName === payload.payload.firstName && employee.birthDate === payload.payload.birthDay 
      })
      if(index !== -1) {
        state.employees.splice(index, 1)
      }
    }
  }
});

export const { addEmployee, showEditModal, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;

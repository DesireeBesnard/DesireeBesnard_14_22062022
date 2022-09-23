import { createSlice } from '@reduxjs/toolkit';

//const initialState = []
const initialState = {
  employees: [],
  homePage: true
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, payload) => {
      state.employees.push(payload.payload)
    },
    deleteEmployee: (state, payload) => {
      const index = state.employees.findIndex(employee => {
        return employee.firstName === payload.payload.firstName && employee.birthDate === payload.payload.birthDay 
      })
      if(index !== -1) {
        state.employees.splice(index, 1)
      }
    },
    changePageStatus: (state, payload) => {
      //console.log(state.homePage, !payload.payload)
      state.homePage = !payload.payload
    }
  }
});

export const { addEmployee, deleteEmployee, changePageStatus } = employeesSlice.actions;
export default employeesSlice.reducer;

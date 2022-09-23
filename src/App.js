import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/createEmployee/index.';
import Employee from './pages/EmployeeList';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<CreateEmployee />}/>
          <Route path='/employeeList' element = {<Employee />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

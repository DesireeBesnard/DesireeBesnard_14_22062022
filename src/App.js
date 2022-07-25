import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/createEmployee/index.';
import EmployeeList from './pages/EmployeeList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<CreateEmployee />}/>
          <Route path='/employeeList' element = {<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

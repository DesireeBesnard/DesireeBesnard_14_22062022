import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/createEmployee/index.';
import Employee from './pages/EmployeeList';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<CreateEmployee />}/>
          <Route path='/employeeList' element = {<Employee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

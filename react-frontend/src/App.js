import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeecomponent from './components/AddEmployeecomponent';
import SignUpComponent from './components/SignUpComponent';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <HeaderComponent />
      <div className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<SignUpComponent />}></Route>
            <Route path='/employees' element={<ListEmployeeComponent />}></Route>
            <Route path='/add-employee' element={<AddEmployeecomponent />}></Route>
            <Route path='/edit-employee/:id' element={<AddEmployeecomponent />}></Route>
            <Route path='/login' element={<LoginComponent />}></Route>
          </Routes>
        </Router>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;

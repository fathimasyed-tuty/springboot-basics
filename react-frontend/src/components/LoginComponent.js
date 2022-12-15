import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {

    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.emailId) {
            errors.emailId = "Email is required!";
        } else if (!regex.test(values.emailId)) {
            errors.emailId = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
          } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
          }
  
        console.log(errors);
        console.log(Object.keys(errors).length);
        if (Object.keys(errors).length === 0) {
            return 1;
        }
    };
    const login = (e) => {

        e.preventDefault();
        const formValues = { emailId: emailId, password: password };
        if (validate(formValues) === 1) {
            const admin = { emailId, password };
            console.log(admin);
            EmployeeService.login(admin).then((response) => {
                console.log(response);
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <div>
            <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>Login</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email Id:</label>
                                    <input type="text" placeholder="Enter email id" name="emailId" className="form-control" value={emailId} onChange={(emp) => setEmailId(emp.target.value)} required></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Password:</label>
                                    <input type="password" placeholder="Enter password" name="password" className="form-control" value={password} onChange={(emp) => setPassword(emp.target.value)} required></input>
                                </div>
                                <button className='btn btn-success' onClick={(e) => login(e)}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent
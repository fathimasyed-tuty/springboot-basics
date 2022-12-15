import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const SignUpComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
          errors.firstName = "Firstname is required!";
        }
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

        if (!values.confirmPassword) {
            errors.confirmPassword = "Password is required";
          } else if (values.confirmPassword.length < 4) {
            errors.confirmPassword = "Password must be more than 4 characters";
          } else if (values.password.length > 10) {
            errors.confirmPassword = "Password cannot exceed more than 10 characters";
          }
          
          if(values.password !== values.confirmPassword) {
            errors.confirmPassword = "Both the passwords must be same"
          }
          console.log(errors);
          console.log(Object.keys(errors).length);
          if(Object.keys(errors).length === 0) {

            const admin = {firstName, lastName, emailId, password};
            console.log(admin);
            EmployeeService.signIn(admin).then((response) => {
                console.log(response);
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            })
        }
      };

    const signUp = (e) => {

        e.preventDefault();
        const formValues = { firstName: firstName, emailId: emailId, password: password, confirmPassword: confirmPassword };
        validate(formValues);
    }
    
    return (
        <div>
            <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>SignUp</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name:</label>
                                    <input type="text" placeholder="Enter first name" name="firstName" className="form-control" value={firstName} onChange={(emp) => setFirstName(emp.target.value)} required="true"></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name:</label>
                                    <input type="text" placeholder="Enter last name" name="lastName" className="form-control" value={lastName} onChange={(emp) => setLastName(emp.target.value)} required="true"></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email Id:</label>
                                    <input type="text" placeholder="Enter email id" name="emailId" className="form-control" value={emailId} onChange={(emp) => setEmailId(emp.target.value)} required="true"></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Password:</label>
                                    <input type="password" placeholder="Enter password" name="password" className="form-control" value={password} onChange={(emp) => setPassword(emp.target.value)} required="true"></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Confirm Password:</label>
                                    <input type="password" placeholder="Enter confirm password" name="confirmPassword" className="form-control" value={confirmPassword} onChange={(emp) => setConfirmPassword(emp.target.value)} required="true"></input>
                                </div>
                                <button className='btn btn-success' onClick={(e) => signUp(e)}>Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpComponent
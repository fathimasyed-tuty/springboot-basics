import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddEmployeecomponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

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
        console.log(errors);
        console.log(Object.keys(errors).length);
        if (Object.keys(errors).length === 0) {

            return 1;
        }
    };

    const saveOrUpdateEmployee = (e) => {

        e.preventDefault();
        const formValues = { firstName: firstName, emailId: emailId };
        if (validate(formValues) === 1) {
            const employee = { firstName, lastName, emailId };
            console.log(employee);

            if (id) {
                EmployeeService.updateEmployee(id, employee).then((response) => {

                    console.log(response);
                    navigate('/employees');
                }).catch(error => {
                    console.log(error);
                })
            } else {
                EmployeeService.createEmployee(employee).then((response) => {

                    console.log(response);
                    navigate('/employees');
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmailId(response.data.emailId);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const heading = () => {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {heading()}
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name:</label>
                                    <input type="text" placeholder="Enter first name" name="firstName" className="form-control" value={firstName} onChange={(emp) => setFirstName(emp.target.value)} required></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name:</label>
                                    <input type="text" placeholder="Enter last name" name="lastName" className="form-control" value={lastName} onChange={(emp) => setLastName(emp.target.value)} required></input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email Id:</label>
                                    <input type="text" placeholder="Enter email id" name="emailId" className="form-control" value={emailId} onChange={(emp) => setEmailId(emp.target.value)} required></input>
                                </div>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                &nbsp;&nbsp;
                                <Link to="/employees" className='btn btn-danger'>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeecomponent
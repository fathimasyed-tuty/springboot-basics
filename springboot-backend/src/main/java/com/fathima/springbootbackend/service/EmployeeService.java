package com.fathima.springbootbackend.service;

import com.fathima.springbootbackend.dto.AppResponseDto;
import com.fathima.springbootbackend.exception.ResourceNotFoundException;
import com.fathima.springbootbackend.model.Employee;
import com.fathima.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Transactional
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee getEmployeeById(long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id:" + id));
        return employee;
    }

    public Employee updateEmployee(long id, Employee newEmployeeDetails) {
        Employee employeeDetails = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id:" + id));
        employeeDetails.setFirstName(newEmployeeDetails.getFirstName());
        employeeDetails.setLastName(newEmployeeDetails.getLastName());
        employeeDetails.setEmailId(newEmployeeDetails.getEmailId());
        employeeRepository.save(employeeDetails);
        return employeeDetails;
    }

    public AppResponseDto deleteEmployee(long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not found with id:" + id));
        employeeRepository.delete(employee);
        AppResponseDto appResponseDto = new AppResponseDto("Deleted successfully...","Success");
        return appResponseDto;
    }
}

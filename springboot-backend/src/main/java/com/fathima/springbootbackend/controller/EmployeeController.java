package com.fathima.springbootbackend.controller;

import com.fathima.springbootbackend.dto.AppResponseDto;
import com.fathima.springbootbackend.exception.ResourceNotFoundException;
import com.fathima.springbootbackend.model.Employee;
import com.fathima.springbootbackend.repository.EmployeeRepository;
import com.fathima.springbootbackend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) {
        Employee employee = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employee);
    }

    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee newEmployeeDetails) {
        Employee employeeDetails = employeeService.updateEmployee(id, newEmployeeDetails);
        return ResponseEntity.ok(employeeDetails);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> deleteEmployee(@PathVariable long id) {
        AppResponseDto appResponseDto = employeeService.deleteEmployee(id);
        return ResponseEntity.ok(appResponseDto);
    }
}

package com.fathima.springbootbackend;

import com.fathima.springbootbackend.model.Employee;
import com.fathima.springbootbackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {

		Employee employee1 = new Employee();
		employee1.setFirstName("Asmi");
		employee1.setLastName("Sherine");
		employee1.setEmailId("asmilasherine@gmail.com");
		employeeRepository.save(employee1);

		Employee employee2 = new Employee();
		employee2.setFirstName("Harsha");
		employee2.setLastName("Mol");
		employee2.setEmailId("harshamol@gmail.com");
		employeeRepository.save(employee2);
	}
}

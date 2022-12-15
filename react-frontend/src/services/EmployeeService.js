import axios from "axios";

const BASE_URL1 = "http://localhost:9000/api/employees";
const BASE_URL2 = "http://localhost:9000/admin";

class EmployeeService {

    getAllEmployees() {
        return axios.get(BASE_URL1);
    }

    createEmployee(employee) {
        return axios.post(BASE_URL1, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(BASE_URL1 + "/" + employeeId);
    }

    updateEmployee(employeeId, employee) {
        return axios.put(BASE_URL1 + "/" + employeeId, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(BASE_URL1 + "/" + employeeId);
    }
    signIn(admin) {
        return axios.post(BASE_URL2, admin);
    }
    login(admin) {
        return axios.get(BASE_URL2+ "/login", admin);
    }
}

//export the object of EmployeeService, hence we can directly use this object in another components
export default new EmployeeService();
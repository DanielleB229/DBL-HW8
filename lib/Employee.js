class Employee {
    constructor(id, name, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee'
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;
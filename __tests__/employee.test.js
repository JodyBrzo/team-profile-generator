const Employee = require('../lib/Employee.js');

describe('Employee', () =>{

    describe ('should create a new instance of employee', () => {

        const employee = new Employee('Jody Brzovski', '7777', 'jodyb@email.com');

        expect(employee.name).toBe('Jody Brzovski');
        expect(employee.id).toBe('7777');
        expect(employee.email).toBe('jodyb@email.com');    

        it('should get the employee name', () => {
        
            expect(employee.getName()).toEqual(expect.stringContaining('Jody Brzovski'));
        });
        
        it("should get the Employee's ID", () => {
        
            expect(employee.getId()).toEqual(expect.stringContaining('7777'));
        });
        
        it("should get the Employee's email", () => {
        
            expect(employee.getEmail()).toEqual(expect.stringContaining('jodyb@email.com'));
        });
        
        it("should get the Employee's role", () => {
        
            expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
        });
    })
})
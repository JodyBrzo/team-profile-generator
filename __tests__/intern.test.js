const Intern = require('../lib/Intern.js');

describe('Intern', () =>{

    describe ('should create a new instance of intern', () => {

        const intern = new Intern('Jody Brzovski', '7777', 'jodyb@email.com', 'university');

        expect(intern.name).toBe('Jody Brzovski');
        expect(intern.id).toBe('7777');
        expect(intern.email).toBe('jodyb@email.com');  
        expect(intern.school).toBe('university');  

        it('should get the Interns school', () => {
        
            expect(intern.getSchool()).toEqual(expect.stringContaining('university'));
        });
       
        it("should get the interns role", () => {
        
            expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
        });
    })
})
const Engineer = require('../lib/Engineer.js');

describe('Engineer', () =>{

    describe ('should create a new instance of engineer', () => {

        const engineer = new Engineer('Jody Brzovski', '7777', 'jodyb@email.com', 'MyGitHub');

        expect(engineer.name).toBe('Jody Brzovski');
        expect(engineer.id).toBe('7777');
        expect(engineer.email).toBe('jodyb@email.com');  
        expect(engineer.github).toBe('MyGitHub');  

        it('should get the engineers gitHub', () => {
        
            expect(engineer.getGithub()).toEqual(expect.stringContaining('MyGitHub'));
        });
       
        it("should get the engineers role", () => {
        
            expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
        });
    })
})
const Manager = require('../lib/Manager.js');

describe('Manager', () =>{

    describe ('should create a new instance of manager', () => {

        const manager = new Manager('Jody Brzovski', '7777', 'jodyb@email.com', '80');

        expect(manager.name).toBe('Jody Brzovski');
        expect(manager.id).toBe('7777');
        expect(manager.email).toBe('jodyb@email.com');  
        expect(manager.office).toBe('80');  

        it('should get the Managers role', () => {
        
            expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
        });
    })
})
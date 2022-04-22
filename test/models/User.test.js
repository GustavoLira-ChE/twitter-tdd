import User from './../../app/models/User'

describe("Unit test for user class", () => {
    test("Create an User object", () => {
        //Instance a User
        const testUser = new User(123,'@JohnDoe','John Doe', 'Bio', 'dateCreated', 'lastUpdate');
        //Test validation
        expect(testUser.id).toBe(123)
        expect(testUser.username).toBe('@JohnDoe')
        expect(testUser.name).toBe('John Doe')
        expect(testUser.bio).toBe('Bio')
        expect(testUser.dateCreated).toBe('dateCreated')
        expect(testUser.lastUpdate).toBe('lastUpdate')
    });
    test("", () => {
        let testDate = new Date();
        //Instance a user
        const testUser = new User(222,'@JohnDoe','John Doe', 'Bio', testDate, testDate);
        //Test validation
        expect(testUser.dateCreated).toBe(testDate)
        expect(testUser.lastUpdate).toBe(testDate)
    });
});
import User from './../../app/models/User'

describe("Unit test for user class", () => {
    test("1) Create an User object", () => {
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
    test("2) Validation of dateCreated and lastUpdate", () => {
        //Instance a user
        const testUser = new User(222,'@JohnDoe','John Doe', 'Bio');
        //Test validation
        expect(testUser.dateCreated).not.toBeUndefined()
        expect(testUser.lastUpdate).not.toBeUndefined()
    });
    test("3) Test getters", () => {
        //Instance a user
        const testUser = new User(222,'@JohnDoe','John Doe', 'Bio');
        //Test getters
        expect(user.getUsername).toBe('@JohnDoe')
        expect(user.getBio).toBe('Bio')
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    });
    test("4) Test setters", () => {

    });
});
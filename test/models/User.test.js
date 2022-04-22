import User from './../../app/models/User'

describe("Unit test for user class", () => {
    test("1) Create an User object", () => {
        //Instance a User
/*         const testUser = new User(123,'@JohnDoe','John Doe', 'Bio', 'dateCreated', 'lastUpdate'); */
        const testUser = new User(123,'@JohnDoe','John Doe', 'Bio');
        //Test validation
        expect(testUser.id).toBe(123)
        expect(testUser.username).toBe('@JohnDoe')
        expect(testUser.name).toBe('John Doe')
        expect(testUser.bio).toBe('Bio')
        /* expect(testUser.dateCreated).toBe('dateCreated')
        expect(testUser.lastUpdated).toBe('lastUpdate') */
    });
    test("2) Validation of dateCreated and lastUpdate", () => {
        //Instance a user
        const testUser = new User(222,'@JohnDoe','John Doe', 'Bio');
        //Test validation
        expect(testUser.dateCreated).not.toBeUndefined()
        expect(testUser.lastUpdated).not.toBeUndefined()
    });
    test("3) Test getters", () => {
        //Instance a user
        const testUser = new User(222,'@JohnDoe','John Doe', 'Bio');
        //Test getters
        expect(testUser.getUsername).toBe('@JohnDoe')
        expect(testUser.getBio).toBe('Bio')
        expect(testUser.getDateCreated).not.toBeUndefined()
        expect(testUser.getLastUpdated).not.toBeUndefined()
    });
    test("4) Test setters", () => {
        //Instance a User
        const testUser = new User(222,'@JohnDoe','John Doe', 'Bio');
        //Test setters
        expect(testUser.setUserName('newUser')).toBe('newUser')
        expect(testUser.setBio('newBio')).toBe('newBio')
    });
});
import UserService from './../../app/services/userService'

describe("Test for userService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, '@JohnDoe', 'John Doe')
        expect(user.id).toBe(1)
        expect(user.username).toBe('@JohnDoe')
        expect(user.name).toBe('John Doe')
        expect(user.bio).toBe('My default bio')
    });
    test("2. Test getInfo method to obtain user data in a list",() => {
        const user = UserService.create(1, '@JohnDoe', 'John Doe')
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("@JohnDoe")
        expect(userInfoInList[2]).toBe("John Doe")
        expect(userInfoInList[3]).toBe("My default bio")
    });
    test("3. Test updateUserUsername method to update username value with a string from a user class received", () =>{
        const user = UserService.create(1, '@JohnDoe', 'John Doe')
        UserService.updateUserUsername(user,"@newUsername")
        expect(user.username).toBe("@newUsername")
    });
    test("4. Test getAllUsernames method to display a list of usernames from a list of User class passed", () => {
        const user1 = UserService.create(1, '@AlejandroSanz', 'Alejandro Sanz') 
        const user2 = UserService.create(1, '@CarlosVives', 'Carlos Vives') 
        const user3 = UserService.create(1, '@PabloAlboran', 'Pablo Alboran')
        let usersList = [user1, user2, user3]
        const usernamesList = UserService.getAllUsernames(usersList)
        
        expect(usernamesList[0]).toBe('@AlejandroSanz')
        expect(usernamesList[1]).toBe('@CarlosVives')
        expect(usernamesList[2]).toBe('@PabloAlboran')
    });
});

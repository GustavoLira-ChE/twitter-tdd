import UserView from './../../app/view/userview'

describe("Test to userView", () => {
    test("1. Return an error object when try to create a new user with a payload with a null value", () => {
        const payload = null
        const user = UserView.createUser(payload)
        expect(user.error).toBe("payload doesn't exist")
    });
    test("2. Return an error object if payload have a key with a invalid value", () => {
        const payload = {
            id: 1,
            username: "@JohnDue",
            name: null
        }
        const user = UserView.createUser(payload)
        expect(user.error).toMatch(/Valid value needed/)
    });
    test("3. Return an error object if payload have a invalid property", () => {
        const payload = {
            number: 1,
            username: "@JohnDue",
        }
        const user = UserView.createUser(payload)
        expect(user.error).toMatch(/Valid value needed/)
    });
    test("4. Create a User object if a payload is sent with id, username and name properties with a valid value", () => {
        const payload = {
            id: 1,
            username: "@JohnDue",
            name: "John Due"
        }
        const user = UserView.createUser(payload)
        expect(user.id).toBe(1)
        expect(user.username).toBe("@JohnDue")
        expect(user.name).toBe("John Due")
    });
});
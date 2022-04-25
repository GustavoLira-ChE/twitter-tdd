import User from './../models/User'

export default class UserService {
    static create(id, username, name){
        return new User(id, username, name, "My default bio")
    }
    static getInfo(user){
        let list = [user.id, user.username, user.name, user.bio]
        return list
    }
    static updateUserUsername(user,string){
        user.setUsername = string
    }
    static getAllUsernames(userList){
        let usernamesList = []
        userList.forEach(element => {
            usernamesList.push(element.getUsername)
        });
        return usernamesList
    }
}
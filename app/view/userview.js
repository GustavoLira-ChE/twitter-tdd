import UserService from "./../services/userService";

export default class UserView{
    static createUser(payload){
        if(payload === null || payload === undefined){
            return {error: "payload doesn't exist"}
        } else{
            if(payload.hasOwnProperty('id') && payload.hasOwnProperty('username') && payload.hasOwnProperty('name')){
                if(payload.id === null || payload.username === null || payload.name === null){
                    return {error: "Valid value needed"}
                } else{
                    return UserService.create(payload.id, payload.username, payload.name)
                }
            } else{
                return {error: "Valid value needed"}
            }
        }
    }
}

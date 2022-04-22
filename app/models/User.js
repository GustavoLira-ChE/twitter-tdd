export default class User{
    constructor(id,username,name,bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
    //getters
    get getUsername(){
        return this.username
    }
    get getBio(){
        return this.bio
    }
    get getDateCreated(){
        return this.dateCreated
    }
    get getLastUpdated(){
        return this.lastUpdated
    }
    //setters
    set setUsername(newUsername){
        this.username = newUsername
        this.lastUpdated = new Date() 
    }
    set setBio(newBio){
        this.bio = newBio
        this.lastUpdated = new Date()
    }
}
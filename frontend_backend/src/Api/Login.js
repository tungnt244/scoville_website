import jwt from 'jsonwebtoken'

export default function login(user){
    if(user.email == "admin" && user.password == "admin") {
        let token = jwt.sign(user, "secret string")
        return token
    }
    
    return null
}
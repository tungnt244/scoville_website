import jwt from 'jsonwebtoken'

export default function checkToken(token){
    //if valid => true
    let decoded = jwt.verify(token, "secret string")
    if(decoded && decoded.email=="admin" && decoded.password == "admin"){
        return true
    }
    return false
}
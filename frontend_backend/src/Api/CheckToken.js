import jwt from 'jsonwebtoken'
import {api_url} from '../config'
import axios from 'axios'

export default function checkToken(token, callback){
    //if valid => true
    let user = jwt.verify(token, "secret string")

    let isValidUser = axios.post(api_url + '/login', {
        email: user.email,
        password: user.password
    }).then(response => {
        callback("valid_token")
        return
    }).catch(error => {
        console.log('error: ', error)
        return
    })
}
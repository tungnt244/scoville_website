import jwt from 'jsonwebtoken'
import {api_url} from '../config'
import axios from 'axios'

export default function login(user, callback){
    console.log('user', user)
    let isValidUser = axios.post(api_url + '/login', {
        email: user.email,
        password: user.password
    }).then(response => {
        console.log('response from go server', response)
        let token = jwt.sign(user, "secret string")
        console.log('token in login', token)
        callback(token)
        return
    }).catch(error => {
        console.log('error: ', error)
        return
    })
}   
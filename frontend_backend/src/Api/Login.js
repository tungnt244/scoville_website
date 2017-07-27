import jwt from 'jsonwebtoken'
import {api_url} from '../config'
import axios from 'axios'

export default function login(user){

    let isValidUser = axios.post(api_url + '/login', {
        email: user.email,
        password: user.password
    }).then(response => {
        let token = jwt.sign(user, "secret string")
        return token
    }).catch(error => {
        console.log('error: ', error)
        return null
    })
}
import jwt from 'jsonwebtoken'
import {api_url, secret_token_string, token_expire_time} from '../config'
import axios from 'axios'

export default function deleteArticleById(id, callback){
    console.log('detele article id', id)
    let url = api_url + '/news/'+ id
    console.log('url', url)
    axios.delete(url).then(response => {
        callback(response.data)
        return
    }).catch(error => {
        console.log('error: ', error)
        return
    })
}   
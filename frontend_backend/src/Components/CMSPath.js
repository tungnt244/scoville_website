import React, {Component} from 'react'
import axios from 'axios'
import {url} from '../config'
import checkValidToken from './CheckVAlidToken'

export default class CMSPath extends Component {

    //check if the user is admin or not
    //if he is admin => into cms path
    //if he is not admin => into login page


    //check in frontend: if there is token in localstorage or not
    //check in backend: is the token is valid or not
    constructor(props){
        super(props)
        this.state = {
            isAdmin: false
        }
    }
    
    componentDidMount(){
        let checkTokenPromise = new Promise((resolve, reject) => {
            checkValidToken(() => resolve("success"))
        })
        
        checkTokenPromise.then(() => this.setState({
            isAdmin: true
        }))
    }

    render(){
        if(this.state.isAdmin){
            return(
                <div>You are the admin</div>
            )
        }else{
            return(
            <div>
                You are not the admin
            </div>
        )
        }
    }
}
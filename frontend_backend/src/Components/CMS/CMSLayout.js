import React, {Component} from 'react'
import axios from 'axios'
import {url} from '../../config'
import checkValidToken from '../CheckValidToken'


export default class CMSLayout extends Component {

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
                <div>{this.props.children}</div>
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
import React, {Component} from 'react'
import {Form, Col, ControlLabel, FormControl, FormGroup, Button, Alert} from 'react-bootstrap'
import axios from 'axios'
import {url} from '../config'
import {browserHistory} from 'react-router'

export default class AdminLogin extends Component {

    constructor(props){
        super(props)
        this.state={
            isLogged: false,
            email: '',
            password: '',
            errorMessage: '',
        }
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    componentDidMount(){
        let isLogged = localStorage.getItem("token")
        if(isLogged)
            this.setState({
                isLogged: true
            })
    }

    handleLogin = (e) => {
        e.preventDefault()
        if(this.state.email === '' || this.state.password === ''){
            this.setState({
                errorMessage: "Enter your email and password"
            })
            return
        }
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post(url+'/admin/login', user).then( response => {
            localStorage.setItem('token', response.data.token)
            this.setState({
                isLogged: true,
            })
            browserHistory.push('/admin/cms')
        }).catch(error => {
            let errorMessage = ''
            if(typeof error.response != 'undefined'){
                errorMessage = error.response.data
            }
            this.setState({
                errorMessage: errorMessage 
            })
            console.log('error: ', error)
        })
    }   

    handleLogout() {
        localStorage.clear()
        this.setState({
            isLogged: false
        })
    }

    render(){
        if(this.state.isLogged){
            return(
                <Button className="centered" bsStyle="danger" onClick={() => this.handleLogout()}>
                    Sign out
                </Button>
            )
        }else{
            return(
                <Form horizontal>
                    {this.state.errorMessage.length > 0 && 
                    <FormGroup>
                        <Alert bsStyle="warning">
                            <strong>{this.state.errorMessage}</strong>
                        </Alert>
                    </FormGroup>
                    }
                    <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={4}>
                        <FormControl type="text" placeholder="Email" value={this.state.email} onChange={this.changeEmail} />
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={4}>
                        <FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.changePassword} />
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button bsStyle="success" type="submit" onClick={this.handleLogin}>
                        Sign in
                        </Button>
                    </Col>
                    </FormGroup>
                </Form>
            )
        }
        
    }
}
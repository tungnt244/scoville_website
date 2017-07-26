import React, {Component} from 'react'
import {Form, Col, ControlLabel, FormControl, FormGroup, Button} from 'react-bootstrap'
export default class AdminLogin extends Component {

    constructor(props){
        super(props)
        this.state={
            email: '',
            password: ''
        }
    }

    changeEmail = (e) => {
        console.log(e.target.value)
        this.setState({
            email: e.target.value
        })
    }

    changePassword = (e) => {
        console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault()
        console.log('email', this.state.email)
        console.log('password', this.state.password)
    }
    render(){
        return(
            <Form horizontal>
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
                    <Button type="submit" onClick={this.handleLogin}>
                    Sign in
                    </Button>
                </Col>
                </FormGroup>
            </Form>
        )
    }
}
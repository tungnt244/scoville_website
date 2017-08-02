import React, {Component} from 'react'
import axios from 'axios';
import {api_url} from '../config'
import {Jumbotron} from 'react-bootstrap'

export default class CMSSingleArticle extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: 'Title',
            content: 'Content'
        }
    }

    componentDidMount(){
        if(this.props.params.id){
            console.log('id', this.props.params.id)
            axios.get(api_url +'/news/'+this.props.params.id).then(response => {
                console.log('response data', response.data)
                let {content, description, id, picture, title} = response.data
                this.setState({
                id: id,
                title: title,
                content: content,
                avatar: picture,
                description: description
                })
            }).catch(error => {
                console.log('error: ', error)
            })
        }else{
            this.setState({
                content: 'Can not load the article'
            })
        }
    }

    createMarkup() {
        return {__html: this.state.content};
    }

    MyComponent() {
        return <div dangerouslySetInnerHTML={this.createMarkup()} />;
    }

    render(){
        return(
            <Jumbotron>
                <h1>{this.state.title}</h1>
                {this.MyComponent()}
            </Jumbotron>
        )
    }
}
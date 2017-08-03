import React, {Component} from 'react'
import {Media,Thumbnail} from 'react-bootstrap'

export default class CMSSummary extends Component {

    constructor(props){
        super(props)
        this.state = {
            article: this.props.article || ''
        }
        
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            article: nextProps.article
        })
    }

    render(){
        if(this.state.article)
            return(
                <Media>
                    <Media.Left>
                        <Thumbnail href={`/news/${this.state.article.id}`} width={64} height={64} src={this.state.article.picture} alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{this.state.article.title}</Media.Heading>
                        <p>{this.state.article.description}</p>
                    </Media.Body>
                </Media>
            )
        else{
            return(
                <div>Wait a minute</div>
            )
        }
    }
}
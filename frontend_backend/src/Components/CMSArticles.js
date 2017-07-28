import React, {Component} from 'react'
import CMSSingleArticle from './CMSSingleArticle'
import {api_url} from '../config'
import axios from 'axios'

export default class CMSArticles extends Component {

    constructor(props){
        super(props)
        this.state = {
            article: ''
        }
    }

    componentDidMount(){
        console.log('id ', this.props.params)
        let id = this.props.params.id || 2
        let url = api_url + '/news/' + id
        console.log('url', url)
        axios.get(url).then(response => {
            console.log('hello', response)
            this.setState({
                article: response.data
            })
        }).catch(error => {
            console.log('error', error)
        })        
    }

    render(){
        console.log('eerafasdfa', this.state.article)
        if(this.state.article != ''){
            return(
                <CMSSingleArticle article={this.state.article}/>
            )
        }else return(<div>hello there, this is where i put article</div>)
        
    }
}
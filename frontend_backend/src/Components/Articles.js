import React, {Component} from 'react'
import SingleArticle from './SingleArticle'
import {api_url} from '../config'
import axios from 'axios'

export default class Articles extends Component {

    constructor(props){
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        axios.get(api_url + '/news/1').then(response => {
            let articles = []
            articles.push(response.data)
            console.log('response', response)
            this.setState({
                articles: articles
            })
        }).catch(error => {
            console.log('error', error)
        })        
    }

    render(){
        if(this.state.articles.length>0){
            return(
                <div><SingleArticle article={this.state.articles[0]}/></div>
            )
        }else return(<div>hello there</div>)
        
    }
}
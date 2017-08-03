import React, {Component} from 'react'
import CMSSummary from './CMSSummary'
import {api_url} from '../../config'
import axios from 'axios'

export default class CMSArticles extends Component {

    constructor(props){
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        axios.get(api_url +'/news/brief').then(response => {
            console.log('hello', JSON.stringify(response,null,4))
            this.setState({
                articles: response.data
            })
        }).catch(error => {
            console.log('error: ', error)
        })        
    }

    renderAllSummary(){
        console.log('articles', this.state.articles.length)
        let articles = this.state.articles
        let temp = []
        for(let i=0; i<articles.length; i++){
            console.log(i, JSON.stringify(articles[i], null, 4))
            temp.push(<CMSSummary key={articles[i].id} article={articles[i]}/>)
        }
        return temp
    }

    render(){
        console.log('this.state', JSON.stringify(this.state.articles.length, null, 4))
        if(this.state.articles.length > 0){
            return (
                <div>
                    {this.renderAllSummary()}
                </div>
            )
        }else
            return(<div>hello there, this is where i put short version of articles</div>)
    }
}
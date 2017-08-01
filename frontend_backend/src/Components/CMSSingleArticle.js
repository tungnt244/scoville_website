import React, {Component} from 'react'

export default class CMSSingleArticle extends Component {
    constructor(props){
        super(props)
        let article = this.props.article
        this.state = {
            title: article.title,
            content: article.content
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.state.title != nextProps.title && this.state.content != nextProps.content){
            this.setState({
                titile: nextProps.title,
                content: nextProps.content
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
        console.log('arrr', this.state)
        return(
            <div>
                <h1>{this.state.title}</h1>
                {this.MyComponent()}
            </div>
        )
    }
}
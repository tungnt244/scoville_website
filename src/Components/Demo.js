import React from 'react'

export default class Demo extends React.Component {
    clicked(e){
        console.log('clicked sd')
    }
    render(){
        return(
            <button onClick={this.clicked}>Click</button>
        )
    }
}
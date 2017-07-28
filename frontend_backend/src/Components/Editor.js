import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';
import {api_url} from '../config';
import axios from 'axios';

export default class Editor extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'Title',
      content: 'Edit your article here'
    }
  }

  handleEditorChange = (e) => {
    this.setState({
      content: e.target.getContent()
    })
    console.log('Content was updated:', this.state.content)
  }

  saveArtical = (e) => {
    axios.post(api_url + '/news', {
      Title: this.state.title,
      Content: this.state.content
    }).then(response => {
      console.log('Saved success')
      console.log('clicked')
    }).catch(error => {
      console.log('error: ', error)
    })
  }

  changeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return (
      <div className="TinyMCE">
        <input type="text" value={this.state.title} onChange={this.changeTitle}/>
        <TinyMCE
          content={this.state.content}
          config={{
            plugins: 'link image code textcolor colorpicker',
            toolbar: 'undo redo | bold italic | forecolor backcolor | alignleft aligncenter alignright | code | link image',
            width: '100%',
            height: 400,
            autoresize_min_height: 400,
            autoresize_max_height: 800,
          }}
          onChange={this.handleEditorChange}
        />
        <button onClick={this.saveArtical}>Save</button>
      </div>
    );
  }
}

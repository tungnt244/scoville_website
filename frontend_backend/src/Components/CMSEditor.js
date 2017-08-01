import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';
import {api_url} from '../config';
import axios from 'axios';
import {browserHistory} from 'react-router'

export default class CMSEditor extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'Title',
      content: 'Edit your article here',
      avatar: 'http://animals.sandiegozoo.org/sites/default/files/2016-12/Wolf_ZN.jpg',
      description: 'Short description'
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
      browserHistory.push('/admin/cms')
    }).catch(error => {
      console.log('error: ', error)
    })
  }

  changeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  changeDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  changeAvatar = (e) => {
    this.setState({
      avatar: e.target.value
    })
  }

  render() {
    return (
      <div className="TinyMCE">
        <input type="text" value={this.state.title} onChange={this.changeTitle}/>
        <input type="text" value={this.state.description} onChange={this.changeDescription}/>
        <input type="text" value={this.state.avatar} onChange={this.changeAvatar}/>
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

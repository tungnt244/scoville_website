import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';

export default class Editor extends Component {
  constructor(props){
    super(props)
    this.state = {
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
    console.log('clicked')
  }

  render() {
    return (
      <div className="TinyMCE">
        <h1>Article</h1>
        <TinyMCE
          content={this.state.content}
          config={{
            plugins: 'link image code textcolor colorpicker',
            toolbar: 'undo redo | bold italic | forecolor backcolor | alignleft aligncenter alignright | code | link image'
          }}
          onChange={this.handleEditorChange}
        />
        <button onClick={this.saveArtical}>Save</button>
      </div>
    );
  }
}

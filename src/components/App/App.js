import React, { Component } from 'react';
import './App.css';
import CommentBox from '../CommentBox'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Comment Box</h1>
        <CommentBox />
      </div>
    );
  }
}

export default App;
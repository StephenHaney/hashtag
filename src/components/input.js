import React, { Component } from 'react';
import { db } from '../fire';

class Input extends Component {
  constructor(props) {
    super(props);

    // Bind events for controlled component:
    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleInputSubmit.bind(this);

    // Initial state:
    this.state = {
      value: '',
    };
  }

  render() {
    return(
      <div className="input-wrapper">
        <form onSubmit={this.handleSubmit}>
          <input autoFocus className="input-input" type="text" value={this.state.value} onChange={this.handleChange} />
          <input className="input-submit btn" type="submit" />
        </form>
      </div>
    )
  }

  handleInputChange(event) {
    this.setState({value: event.target.value});
  }

  handleInputSubmit(event) {
    event.preventDefault();

    if (typeof this.state.value !== 'undefined' && this.state.value.length > 0) {
      db.collection("messages").add({
        dateCreated: Date.now(),
        message: this.state.value,
      })
      .then(function(docRef) {
          console.log("Message written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding message: ", error);
      });
    }

    // clear out the text input
    this.setState({
      value: '',
    });
  }
}

export default Input;

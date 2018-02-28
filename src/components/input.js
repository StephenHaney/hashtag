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
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.value} onChange={this.handleChange} />
        <input type="submit" />
      </form>
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
  }
}

export default Input;

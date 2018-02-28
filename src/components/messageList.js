import React, { Component } from 'react';
import { db } from '../fire';

// Components:
import Message from './message.js';

class MessageList extends Component {
  constructor(props) {
    super(props);

    // Initial state:
    this.state = {
      messages: [],
    }
  }

  componentWillMount() {
    // Set up the listener for DB changes:
    db.collection('messages')
      .orderBy('dateCreated', 'desc')
      .onSnapshot(this.onDbChange.bind(this));
  }

  render() {
    return (
      <ul className="messageList">
        {
          this.state.messages.map(message => 
            <Message key={message.id} message={message} />
          )
        }
      </ul>
    )
  }

  onDbChange(snapshot) {
    var newMessages = [];
    // Loop through db changes and update our state:
    snapshot.docChanges.forEach(change => {
      // If the change type is "added", add the new message to our list to add
      if (change.type === "added") {
        newMessages.push({
          id: change.doc.id,
          text: change.doc.data().message,
        });
      }
    });
    // Add the new messages array to the existing messages state:
    this.setState(prevState => ({
      messages: [ ...newMessages, ...prevState.messages]
    }));
  }
}

export default MessageList;

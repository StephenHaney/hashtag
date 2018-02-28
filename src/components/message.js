import React from 'react';

const Message = (props) => {
  return (
    <li key={props.message.id}>{props.message.text}</li>
  )
};

export default Message;

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

// Components:
import MessageList from './components/messageList.js';
import Input from './components/input.js';

const App = () => {
  return (
    <div id="hashtag">
      <Input />
      <MessageList />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

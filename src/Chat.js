import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css';
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
  return (
    <div className='chat'>
      <div className='chatHeader'>
        <Avatar />

        <div className='chatHeaderInfo'>
          <h3>Room Name</h3>
          <p>Last seen at... </p>
        </div>

        <div className='chatHeaderRight'>
        <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chatBody'>

        <p className='chatMessage'>
          <span className='chatName'>Blake </span>
          This is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
          </p>

          <p className='chatMessage chatReceiver'>
          <span className='chatName'>Blake </span>
          This is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
          </p>

          <p className='chatMessage'>
          <span className='chatName'>Blake </span>
          This is a message
          <span className='chatTimestamp'>
            {new Date().toUTCString()}
          </span>
          </p>
      </div>
      <div className='chatFooter'>
        <InsertEmoticonIcon />
        <form>
          <input placeholder='Type a message' type='text' />
          <button type='submit'>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat

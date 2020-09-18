import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarHeader'>
        <Avatar src='https://avatars1.githubusercontent.com/u/54727915?s=400&u=2da5adab8fa41ca9048ee16816dd2ca47558d6a2&v=4'/>
        <div className='sidebarHeaderRight'> 
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='sidebarSearch'>
        <div className='sidebarSearchContainer'>
          <SearchOutlined />
          <input placeholder='Search or start new chat' type='text'/>
        </div>
      </div>

      <div className='sidebarChats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;

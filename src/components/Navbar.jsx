import React from 'react';
import { Link } from "react-router-dom"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';

function Navbar(props) {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="white" component="div">
          <Link to="/overview">概览</Link>
          <Link to="/process">进程</Link>
          <Link to="/file">文件</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar;


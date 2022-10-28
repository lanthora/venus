import { Box, List, ListItem } from '@mui/material';
import Header from 'components/Header'
import File from 'components/File'
import Net from 'components/Net'
import Process from 'components/Process'
import User from 'components/User'
import React from 'react'

export default function App() {
  return (
    <Box>
      <Header />
      <List>
        <ListItem divider>
          <User />
        </ListItem>
        <ListItem divider>
          <Process />
        </ListItem>
        <ListItem divider>
          <File />
        </ListItem >
        <ListItem divider>
          <Net />
        </ListItem>
      </List>
    </Box>
  )
}

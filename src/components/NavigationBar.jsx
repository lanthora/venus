import AccountCircle from '@mui/icons-material/AccountCircle'
import SecurityIcon from '@mui/icons-material/Security'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import axios from "components/axios"
import history from 'components/history'
import React from 'react'

const pages = [
  { 'title': '概览', 'route': '/overview' },
  { 'title': '进程', 'route': '/process' },
  { 'title': '网络', 'route': '/net' },
  { 'title': '文件', 'route': '/file' },
];

function NavigationBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null)


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SecurityIcon sx={{ display: 'flex', mr: 1 }} />
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              URANUS
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  history.replace(page.route)
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
              sx={{ p: 0 }}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key='user' onClick={() => {
                handleCloseUserMenu()
                history.replace('/user')
              }}>
                <Typography textAlign="center">用户</Typography>
              </MenuItem>

              <MenuItem key='settings' onClick={() => {
                handleCloseUserMenu()
                history.replace('/settings')
              }}>
                <Typography textAlign="center">设置</Typography>
              </MenuItem>
              <MenuItem key='logout' onClick={() => {
                handleCloseUserMenu()
                axios.post('/auth/logout', {
                }).then(function (response) {
                  if (response.data.status === 0)
                    history.replace('/login')
                })
              }}>
                <Typography textAlign="center">登出</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar

import React from 'react'
import axios from "../components/axios"
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import history from '../components/history'

function LoginDialog() {
  const [loginFailedAlert, setLoginFailedAlert] = React.useState(false)
  const username = React.useRef(null)
  const password = React.useRef(null)

  const handleSubmit = () => {
    axios.post('/auth/login', {
      "username": username.current.value,
      "password": password.current.value,
    }).then(function (response) {
      if (response.data.status === 0)
        history.replace('/overview')
      else
        setLoginFailedAlert(true)
    })
  }

  const handleCancel = () => {
    setLoginFailedAlert(true)
  }

  const closeAlert = () => {
    setLoginFailedAlert(false)
  }

  return (
    <span>
      <Dialog open={true}>
        <DialogTitle>登录</DialogTitle>
        <DialogContent>
          <TextField margin="dense" id="username" label="用户名" inputRef={username} fullWidth />
          <TextField margin="dense" id="password" label="密码" type="password" inputRef={password} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>取消</Button>
          <Button onClick={handleSubmit}>确认</Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={loginFailedAlert}
        autoHideDuration={3000}
        onClose={closeAlert}>
        <Alert onClose={closeAlert} severity="error">
          登录失败
        </Alert>
      </Snackbar>
    </span>
  )
}

export default LoginDialog

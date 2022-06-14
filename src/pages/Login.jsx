import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function LoginDialog() {
  // TODO: 后端任何一个接口返回 401 的时候显示登录框.
  const [loginDialog, setLoginDialog] = React.useState(false);
  const [loginFailedAlert, setLoginFailedAlert] = React.useState(false);
  const username = React.useRef(null);
  const password = React.useRef(null);

  React.useEffect(() => {
    axios.post('/user/alive', {
    }).catch(function (error) {
      if (error.response)
        setLoginDialog(true);
    });
  }, []);

  const handleSubmit = () => {
    axios.post('/user/login', {
      "username": username.current.value,
      "password": password.current.value,
    }).then(function (response) {
      if (response.status === 200)
        setLoginDialog(false);
    }).catch(function (error) {
      setLoginFailedAlert(true);
    });
  };

  const handleCancel = () => {
    setLoginFailedAlert(true);
  };

  const closeAlert = () => {
    setLoginFailedAlert(false);
  };

  return (
    <span>
      <Dialog open={loginDialog}>
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
  );
}

export default LoginDialog;

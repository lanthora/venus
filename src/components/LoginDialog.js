import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function LoginDialog() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    // 检查是否成功登录,未登录的话显示对话框
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>登录</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="用户名"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="密码"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>取消</Button>
        <Button onClick={handleClose}>确认</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginDialog;

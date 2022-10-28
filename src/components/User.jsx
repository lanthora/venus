import { Box, Typography, Grid } from '@mui/material';
import axios from "components/axios"
import React from 'react'

export default function User() {

  const [userinfo, setUserinfo] = React.useState({
    userID: '',
    username: '',
    aliasName: '',
    permissions: '',
  })

  React.useEffect(() => {
    async function fetchUserInfo() {
      const result = await axios.post('/auth/showCurrentUserInfo');
      if (result.data.status === 0) {
        setUserinfo({
          userID: result.data.data.userID,
          username: result.data.data.username,
          aliasName: result.data.data.aliasName,
          permissions: result.data.data.permissions,
        });
      } else if (result.data.status === 101) {
        setUserinfo({
          userID: '无权限',
          username: '无权限',
          aliasName: '无权限',
          permissions: '无权限',
        });
      }
    }
    fetchUserInfo()
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>

      <Typography>用户信息</Typography>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography>用户ID: {userinfo.userID}</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography>登录用户名: {userinfo.username}</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography>显示用户名: {userinfo.aliasName}</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography>权限: {userinfo.permissions}</Typography>
        </Grid>
      </Grid>

    </Box >
  )
}

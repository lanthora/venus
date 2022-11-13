import { Box, Typography, Grid, List, ListItem } from '@mui/material';
import axios from 'components/axios'
import React from 'react'

export default function File() {

  function ModuleStatus() {
    const [moduleStatus, setModuleStatus] = React.useState({
      status: '',
      policyCount: '',
      unreadEventCount: '',
    })

    React.useEffect(() => {
      async function fetchModuleStatus() {
        const result = await axios.post('/file/showModuleStatus');
        if (result.data.status === 0) {
          var status
          if (result.data.data.status === 0) {
            status = '关闭'
          } else if (result.data.data.status === 1) {
            status = '开启'
          } else {
            status = ''
          }
          setModuleStatus({
            status: status,
            policyCount: result.data.data.policyCount,
            unreadEventCount: result.data.data.unreadEventCount
          })
        } else if (result.data.status === 101) {
          setModuleStatus({
            status: '无权限',
            policyCount: '无权限',
            unreadEventCount: '无权限',
          })
        }
      }
      fetchModuleStatus();
    }, []);

    return (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography>模块状态: {moduleStatus.status}</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography>策略数: {moduleStatus.policyCount}</Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography>未读事件数: {moduleStatus.unreadEventCount}</Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography>
        <Box sx={{ fontWeight: 'bold', m: 1, fontStyle: 'italic' }}>文件防护</Box>
      </Typography>

      <List>
        <ListItem divider>
          <ModuleStatus />
        </ListItem>
      </List>
    </Box>
  )
}

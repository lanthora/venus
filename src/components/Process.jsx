import { Box, Typography, Grid } from '@mui/material';
import axios from 'components/axios'
import React from 'react'

export default function Process() {

  const [moduleStatus, setModuleStatus] = React.useState({
    status: '',
    policyCount: '',
    unreadEventCount: '',
  })

  const [workMode, setWorkMode] = React.useState('')
  const [defaultEventStatus, setDefaultEventStatus] = React.useState('')

  React.useEffect(() => {
    async function fetchModuleStatus() {
      const result = await axios.post('/process/showModuleStatus');
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

    async function fetchWorkMode() {
      const result = await axios.post('/process/showWorkMode');
      if (result.data.status === 0) {
        if (result.data.data.judge === 0) {
          setWorkMode('静默模式')
        } else if (result.data.data.judge === 1) {
          setWorkMode('审计模式')
        } else {
          setWorkMode('防御模式')
        }
      } else if (result.data.status === 101) {
        setWorkMode('无权限')
      }
    }

    async function fetchDefaultEventStatus() {
      const result = await axios.post('/process/showDefaultEventStatus');
      if (result.data.status === 0) {
        if (result.data.data.status === 0) {
          setDefaultEventStatus('等待用户手动处理')
        } else if (result.data.data.status === 1) {
          setDefaultEventStatus('默认忽略')
        } else {
          setDefaultEventStatus('默认信任')
        }
      } else if (result.data.status === 101) {
        setDefaultEventStatus('无权限')
      }
    }

    fetchModuleStatus()
    fetchWorkMode()
    fetchDefaultEventStatus()
  }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>

      <Typography>进程防护</Typography>

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

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography>工作模式: {workMode}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>事件默认状态: {defaultEventStatus}</Typography>
        </Grid>
      </Grid>
    </Box >
  )
}

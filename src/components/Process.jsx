import { Box, Typography, Grid, List, ListItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'components/axios'
import React from 'react'

export default function Process() {

  function ModuleStatus() {
    const [moduleStatus, setModuleStatus] = React.useState({
      status: '',
      policyCount: '',
      unreadEventCount: '',
    })

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

  function WorkModule() {
    const [workMode, setWorkMode] = React.useState('')

    React.useEffect(() => {
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

      fetchWorkMode()
    }, [])


    const [defaultEventStatus, setDefaultEventStatus] = React.useState('')

    React.useEffect(() => {
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
      fetchDefaultEventStatus()
    }, [])

    return (
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Typography>工作模式: {workMode}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>事件默认状态: {defaultEventStatus}</Typography>
        </Grid>
      </Grid>
    )
  }

  function PocessEventList() {
    const columns = [
      {
        field: 'id',
        headerName: 'ID',
        minWidth: 30,
      },
      {
        field: 'argv',
        headerName: '参数列表',
        minWidth: 256,
        flex: 60,
      },
      {
        field: 'binary',
        headerName: '可执行程序',
        minWidth: 128,
        flex: 25,
      },
      {
        field: 'workdir',
        headerName: '工作目录',
        minWidth: 128,
        flex: 15,
      },

      {
        field: 'count',
        headerName: '执行次数',
        minWidth: 32,
      },
      {
        field: 'judge',
        headerName: '执行方式',
        minWidth: 32,
      },
      {
        field: 'status',
        headerName: '策略状态',
        minWidth: 32,
      },
    ];

    const [processEventList, setPocessEventList] = React.useState([])

    React.useEffect(() => {
      async function fetchPocessEventList() {
        const result = await axios.post('/process/listEvents', {
          "offset": 0,
          "limit": 1000,
        });
        if (result.data.status === 0 && result.data.data != null) {
          setPocessEventList(result.data.data)
        }
      }
      fetchPocessEventList()
    }, [])

    return (
      <Box sx={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={processEventList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography>
        <Box sx={{ fontWeight: 'bold', m: 1, fontStyle: 'italic' }}>进程防护</Box>
      </Typography>

      <List>
        <ListItem divider>
          <ModuleStatus />
        </ListItem>
        <ListItem divider>
          <WorkModule />
        </ListItem>
        <ListItem>
          <PocessEventList />
        </ListItem >
      </List>
    </Box>
  )
}

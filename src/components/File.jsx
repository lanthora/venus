import { Box, Typography, Grid, List, ListItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
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

  function EventList() {
    const columns = [
      {
        field: 'id',
        headerName: 'ID',
        minWidth: 128,
      },
      {
        field: 'path',
        headerName: '路径',
        minWidth: 256,
        flex: 1,
      },
      {
        field: 'fsid',
        headerName: '文件系统',
        minWidth: 256,

      },
      {
        field: 'ino',
        headerName: '文件',
        minWidth: 128,
      },
      {
        field: 'perm',
        headerName: '操作权限',
        minWidth: 128,
      },
      {
        field: 'policy',
        headerName: '命中策略',
        minWidth: 128,
      },
      {
        field: 'status',
        headerName: '策略状态',
        minWidth: 128,
      },
      {
        field: 'timestamp',
        headerName: '时间戳',
        minWidth: 128,
      },
    ];

    const [processEventList, setPocessEventList] = React.useState([])

    React.useEffect(() => {
      async function fetchPocessEventList() {
        // TODO: 一次取出 100 万条数据,应该能满足绝大多数场景.未来需要实现成根据情况加载
        const result = await axios.post('/file/listEvents', {
          "offset": 0,
          "limit": 1000000,
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
          disableSelectionOnClick
        />
      </Box>
    )
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography>
        <Box sx={{ fontWeight: 'bold', m: 1, fontStyle: 'italic' }}>文件防护</Box>
      </Typography>

      <List>
        <ListItem>
          <ModuleStatus />
        </ListItem>
        <ListItem>
          <EventList />
        </ListItem >
      </List>
    </Box>
  )
}

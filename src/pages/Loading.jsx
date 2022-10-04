import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import axios from "components/axios"
import history from 'components/history'
import React from 'react'

function Loading(props) {
  React.useEffect(() => {
    axios.post('/auth/showCurrentUserInfo', {
    }).then(function (response) {
      if (response.data.status === 0)
        history.push("/overview")
    })
  })

  const center = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  }

  return (
    <div style={center}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  )
}

export default Loading

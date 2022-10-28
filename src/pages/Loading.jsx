import { Box, CircularProgress } from '@mui/material'
import axios from "components/axios"
import history from 'components/history'
import React from 'react'

export default function Loading() {
  React.useEffect(() => {
    axios.post('/auth/showCurrentUserInfo', {
    }).then(function (response) {
      if (response.data.status === 0) {
        history.push("/app")
      } else {
        history.push("/login")
      }
    })
  }, [])

  const center = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  }

  return (
    <div style={center}>
      <Box>
        <CircularProgress />
      </Box>
    </div>
  )
}

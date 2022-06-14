import React from 'react'
import axios from "../components/axios"
import history from '../components/history'

function Loading(props) {
  React.useEffect(() => {
    axios.post('/user/alive', {
    }).then(function (response) {
      history.replace('/overview')
    })
  })

  return (
    <pre> {`
      Loading.js

      加载中
      `} </pre>
  )
}

export default Loading

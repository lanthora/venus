import React from 'react'
import Axios from "../components/Axios"
import History from '../components/History'

function Loading(props) {
  React.useEffect(() => {
    Axios.post('/user/alive', {
    }).then(function (response) {
      History.replace('/overview')
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

import { create } from 'axios'
import history from 'components/history'

const axios = create()

axios.interceptors.response.use(
  response => {
    if (response.data.status === 100)
      history.replace("/login")

    return response
  }, error => {
    console.log(error)
    return Promise.reject(error)
  })

export default axios




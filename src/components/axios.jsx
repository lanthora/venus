import { create } from 'axios'
import history from './history'

const axios = create()

axios.interceptors.response.use(
  response => {
    if (response.data.status === 2)
      history.push("/login")

    return response
  }, error => {
    console.log(error)
    return Promise.reject(error)
  })

export default axios




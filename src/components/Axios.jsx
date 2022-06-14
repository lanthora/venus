import axios from 'axios'
import History from './History'

const Axios = axios.create()

Axios.interceptors.response.use(
  response => {
    return response
  }, error => {
    if (error.response.status === 401)
      History.replace("/login")

    if (error.response.status === 404)
      History.replace("/login")

    return Promise.reject(error)
  })

export default Axios




import {create} from 'axios'
import history from './history'

const axios = create()

axios.interceptors.response.use(
  response => {
    return response
  }, error => {
    if (error.response.status === 401)
      history.replace("/login")

    if (error.response.status === 404)
      history.replace("/login")

    return Promise.reject(error)
  })

export default axios




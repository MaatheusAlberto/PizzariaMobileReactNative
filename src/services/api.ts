import axios from 'axios'

const api = axios.create({
  // baseURL: 'htp://localhost:3333'
  baseURL: 'http://192.168.100.42:3333'
})

export { api }
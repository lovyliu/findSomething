import axios from 'axios'
import serverAdress from '../serverAdress'

export default{
  queryVideo (params) {
    return axios.get(serverAdress + 'query_video/' + params)
  }
}

/* eslint-disable import/no-anonymous-default-export */
import { axios } from '../../core'

export default {
  getAll: () => axios.get('/dialogs')
}

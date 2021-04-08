import apiClient from './apiClient'

const userApi = {
  getUsers:(params) => {
    const url = '/getUserInfo'
    return apiClient.get(url, {params})
  },
  editUser: (params, data) => {
    const url = '/getUserInfo'
    return apiClient.post(url, {params}, data)
  }
}

export default userApi

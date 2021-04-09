import apiClient from './apiClient'

const userApi = {
  getUsers:(params) => {
    const url = '/getUserInfo'
    return apiClient.get(url, {params})
  },
  editUser: (params) => {
    const url = '/updateUserInfo'
    return apiClient.get(url, {params})
  }
}

export default userApi

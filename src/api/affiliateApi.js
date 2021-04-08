import apiClient from './apiClient'

const affiliateApi = {
  getAffiliate:(params) => {
    const url = '/updateBankInfo'
    return apiClient.get(url, {params})
  },
}

export default affiliateApi

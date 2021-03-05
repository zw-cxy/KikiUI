import { baseUrl } from './settings.js'

export function request({
  url,
  method = 'GET',
  data,
  header = {
    'content-type': 'application/json'
  }
}) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + url,
      header: {
        ...data,
        token: uni.getStorageSync('token') || ''
      },
      method,
      success: res => {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail: res => {
        reject(res)
      }
    })
  })
}

import request from '@/utils/request'
// 获取token
const login = (data) => {
  return request(
    {
      url: '/sys/login',
      method: 'POST',
      data
    },
    true
  )
}
// 获取用户信息
const getUserInfo = () => {
  return request(
    {
      url: '/sys/profile',
      method: 'GET'
    },
    true
  )
}
export default {
  login,
  getUserInfo
}

import request from '@/utils/request'
/**
 * 获取用户信息
 */
const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'GET'
  })
}

export default { getUserInfo }

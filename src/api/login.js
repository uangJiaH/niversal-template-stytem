import request from '@/utils/request'

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
export default {
  login
}

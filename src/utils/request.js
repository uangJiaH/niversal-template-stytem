import axios from 'axios'
import loading from './loading'
import md5 from 'js-md5'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // loading 开启加载调用
    loading.open()

    // 调用接口要传递的参数
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    // TODO 将token 通过请求头发送给后台

    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 调用loading关闭加载
    loading.close()

    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 关闭loading 加载
    loading.close()

    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 关闭loading加载
    loading.close()
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 统一传递参数
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  service(options)
}

// 获取Icode
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
export default request

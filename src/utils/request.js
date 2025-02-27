import axios from 'axios'
// import { useUserStore } from '@/store'
import { ElMessage } from 'element-plus'
import router from '@/router'

// const baseURL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  // baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 2. 携带token
    // const useStore = useUserStore()
    // if (useStore.token) {
    //   config.headers.Authorization = useStore.token
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    // TODO 4. 摘取核心响应数据
    if (res.data.code === 0) {
      return res
    }
    // TODO 3. 处理业务失败
    // 处理业务失败，给错误提示，抛出错误
    ElMessage.error(res.data.message || '服务异常')
    return Promise.reject(res.data)
  },
  (error) => {
    // TODO 5. 处理401错误
    // 错误的特殊情况 => 401 权限不足 或 token 过期 => 清除token，跳转到登录页
    if (error.response?.status === 401) {
      router.push('/login')
    }

    // 错误的默认情况 => 给错误提示，抛出错误
    ElMessage.error(error.response.data.message || '服务异常')
    return Promise.reject(error)
  }
)

export default instance
// export { baseURL }

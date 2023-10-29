// 封装axios
import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const baseURL = 'http://big-event-vue-api-t.itheima.net'

const router = useRouter()

const instance = axios.create({
  baseURL,
  timeout: 100000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    const userStore = useUserStore()
    // 添加token
    if (userStore.token) {
      //如果token存在则携带
      config.headers.Authorization = userStore.token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    if (response.data.code === 0) {
      // 响应正常则直接返回
      return response
    }
    //提示用户错误信息
    ElMessage.error(response.data.message || '服务异常')
    return Promise.reject(response.data)
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    ElMessage.error(error.data.message || '服务异常')
    if (error.response?.status === 401) {
      //权限不够直接退回登录页
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default instance
export { baseURL }

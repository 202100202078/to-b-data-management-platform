import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userUserInfoService } from '@/api/user'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    const userInfo = ref({})
    const getUserInfo = async () => {
      const res = await userUserInfoService()
      userInfo.value = res.data.data
    }

    return {
      token,
      setToken,
      removeToken,
      userInfo,
      getuserInfo
    }
  },
  {
    persist: {
      key: 'userInfo'
    }
  }
)

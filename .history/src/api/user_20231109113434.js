import request from '@/utils/request'

export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })

export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })

export const userUserInfoService = () => request.get('/my/userinfo')

export const userUpdateService = () => request.put('/my/userinfo', data)

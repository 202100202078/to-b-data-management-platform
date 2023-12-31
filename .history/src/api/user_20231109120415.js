import request from '@/utils/request'

export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })

export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })

export const userUserInfoService = () => request.get('/my/userinfo')

export const userUpdateService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })

export const userUploadAvatorService = (avator) =>
  request.patch('/my/update/avatar', {
    avator
  })

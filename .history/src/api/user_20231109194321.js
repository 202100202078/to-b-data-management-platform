import request from '@/utils/request'
//用户：注册用户
export const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })
//用户：用户登录
export const userLoginService = ({ username, password }) =>
  request.post('/api/login', { username, password })
//用户：获取用户信息
export const userUserInfoService = () => request.get('/my/userinfo')
//用户：更新用户信息
export const userUpdateService = ({ id, nickname, email }) =>
  request.put('/my/userinfo', { id, nickname, email })
//用户：更新头像
export const userUploadAvatorService = (avatar) =>
  request.patch('/my/update/avatar', {
    avatar
  })
//用户：修改密码
export const userUpdatePasswordService = ({old_pwd,new_pwd,re_pwd}) =>request.patch('')
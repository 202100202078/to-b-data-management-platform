import request from '@/utils/request'

const userRegisterService = () =>
  request.post('/api/reg', { username, password, repassword })

import request from '@/utils/request'

const userRegisterService = ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })

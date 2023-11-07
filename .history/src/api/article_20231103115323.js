import request from '@/utils/request'
//获取文章分类列表
export const articleGetChannelsService = () => request.get('/my/cate/list')


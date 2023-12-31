import request from '@/utils/request'
//获取文章分类列表
export const articleGetChannelsService = () => request.get('/my/cate/list')
//添加文章分类
export const articleAddChannelService = (data) =>
  request.post('/my/cate/add', data)
//编辑文章分类
export const articleEditChannelService = (data) =>
  request.put('/my/cate/info', data)
//删除文章分类
export const articleDeleteChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: {
      id
    }
  })

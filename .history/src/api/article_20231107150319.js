import request from '@/utils/request'
//分类：获取文章分类列表
export const articleGetChannelsService = () => request.get('/my/cate/list')
//分类：添加文章分类
export const articleAddChannelService = (data) =>
  request.post('/my/cate/add', data)
//分类：编辑文章分类
export const articleEditChannelService = (data) =>
  request.put('/my/cate/info', data)
//分类：删除文章分类
export const articleDeleteChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: {
      id
    }
  })


//文章：获取文章列表
export const articleGetArticleListService = (params) => request.get()
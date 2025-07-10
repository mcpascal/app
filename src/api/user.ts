import requests from '@/utils/requests'

const list = (data: { current?: number; pageSize?: number }) => {
  let page = data?.current ?? 1
  let page_size = data?.pageSize ?? 10
  let url = '/users?page=' + page + '&page_size=' + page_size
  return requests({
    url: url,
    method: 'GET',
  })
}
const profile = () => {
  let url = '/users/profile'
  return requests({
    url: url,
    method: 'GET',
  })
}
const show = (data: { id: number }) => {
  let url = 'users/' + data.id
  return requests({
    url: url,
    method: 'GET',
  })
}
const update = (data: { id: number }) => {
  let url = 'users/' + data.id
  return requests({
    url: url,
    method: 'PUT',
    data: data,
  })
}
const index = (data: { page: number, page_size: number }) => {
  let url = 'users'
  return requests({
    url: url,
    method: 'GET',
  })
}
const destroy = (data: { id: number }) => {
  let url = 'users/' + data.id
  return requests({
    url: url,
    method: 'DELETE',
  })
}
const create = (data: { id: number}) => {
  let url = 'users/' + data.id
  return requests({
    url: url,
    method: 'POST'
  })
}

const user = {
  list,
  profile,
  index,
  show,
  create,
  update,
  destroy,
}

export default user

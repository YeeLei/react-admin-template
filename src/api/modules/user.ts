import { ResPage, User } from '@/api/interface/index'

import http from '@/api'

/**
 * @name 用户管理模块
 */
// * 获取用户列表
export const getUserList = (params: Partial<User.ReqGetUserParams>) => {
  return http.post<ResPage<User.ResUserList>>(`/user/list`, params)
}

// * 新增用户
export const addUser = (params: { id: string }) => {
  return http.post(`/user/add`, params)
}

// * 批量添加用户
export const BatchAddUser = (params: FormData) => {
  return http.post(`/user/import`, params, { headers: { 'Content-Type': 'multipart/form-data' } })
}

// * 编辑用户
export const editUser = (params: { id: string }) => {
  return http.post(`/user/edit`, params)
}

// * 删除用户
export const deleteUser = (params: { id: string[] }) => {
  return http.post(`/user/delete`, params)
}

// * 切换用户状态
export const changeUserStatus = (params: { id: string; status: number }) => {
  return http.post(`/user/change`, params)
}

// * 重置用户密码
export const resetUserPassWord = (params: { id: string }) => {
  return http.post(`/user/rest_password`, params)
}

// * 导出用户数据
export const exportUserInfo = (params: User.ReqGetUserParams) => {
  return http.post<BlobPart>(`/user/export`, params, { responseType: 'blob' })
}

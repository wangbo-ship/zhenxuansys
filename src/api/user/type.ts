//登录接口携带参数类型
export interface loginForm {
  username: string
  password: string
}
//登录接口返回数据类型
interface dataType {
  token: string
}
export interface loginResponseData {
  code: number
  data: dataType
}

//

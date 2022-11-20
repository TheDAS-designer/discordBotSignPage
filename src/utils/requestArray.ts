import axios from 'axios'
import { baseURL } from "../config"
import { getToken, setToken, getRefreshToken } from './auth'
import {getStorage} from './localStorage'

// 刷新 access_token 的接口
const refreshToken = () => {
    const myNft = getStorage('myNft')
    if(!myNft  ||  !myNft.nftCode) return null
    return instance.post('/refresh', { r: getRefreshToken(), nftCode: myNft.nftCode})
}

// 创建 axios 实例
const instance = axios.create({
  baseURL:  baseURL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  }
})

let isRefreshing = false // 标记是否正在刷新 token
let requests:any[] = [] // 存储待重发请求的数组

instance.interceptors.response.use(response => {
    if(Number(response.status) === 200 && Number(response.data.code) === 401 && response.data.msg === "Unauthorized")
    {
        
        const { config } = response
        if (!isRefreshing) {
            isRefreshing = true
            return refreshToken()?.then(res=> {
                const { access_token } = res.data
                setToken(access_token)
                config.headers.Authorization = `${access_token}`
                // token 刷新后将数组的方法重新执行
                requests.forEach((cb) => cb(access_token))
                requests = [] // 重新请求完清空
                return instance(config)
            }).catch(err => {
                console.log('抱歉，您的登录状态已失效，请重新登录！')
                return Promise.reject(err)
            }).finally(() => {
                isRefreshing = false
            })
        } else {
            // 返回未执行 resolve 的 Promise
            return new Promise(resolve => {
                // 用函数形式将 resolve 存入，等待刷新后再执行
                requests.push((token:any) => {
                    config.headers.Authorization = `${token}`
                    resolve(instance(config))
                })  
            })
        }
    }
    return response
})

// 给请求头添加 access_token
const setHeaderToken = (isNeedToken: boolean) => {
  const accessToken = isNeedToken ? getToken() : null
  if (isNeedToken) { // api 请求需要携带 access_token 
    if (!accessToken) { 
      console.log('不存在 access_token 则跳转回登录页')
    }
    instance.defaults.headers.common.Authorization = `${accessToken}`
  }
}

// 有些 api 并不需要用户授权使用，则无需携带 access_token；默认不携带，需要传则设置第三个参数为 true
export const get = (url:any, params = {}, isNeedToken = false) => {
  setHeaderToken(isNeedToken)
  return instance({
    method: 'get',
    url,
    params,
  })
}

export const post = (url:any, params = {}, isNeedToken = false) => {
  setHeaderToken(isNeedToken)
  return instance({
    method: 'post',
    url,
    data: params,
  })
}

export const deleteReq = (url:any, params = {}, isNeedToken = true) => {
  setHeaderToken(isNeedToken)
  return instance({
    method: 'delete',
    url,
    data: params,
  })
}
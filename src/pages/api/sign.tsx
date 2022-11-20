// import {post} from "../../utils/requestArray.js"
import axios from 'axios'
import { baseURL } from "../../config"
// 创建 axios 实例
const instance = axios.create({
    baseURL:  "http://192.168.31.214:3001",
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
    }
  })

  export const post = (url:any, params = {}) => {

    return instance({
      method: 'post',
      url,
      data: params,
    })
  }
export async  function sign(sign:  string){
    return await post('/ticket', {sign})
    // return await fetch('/ticket')
}
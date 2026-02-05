import axios from 'axios'
import {message} from 'antd'

const request = axios.create({
    timeout: 10*1000,
    // baseURL: '/api',
})

// request 响应拦截器
request.interceptors.response.use(
res => {
        console.log("res",res)
        // 必须返回 config，否则后续请求无法继续
        const resData=(res.data||{})as ResType
        const {code,msg,data}=resData
        if(code!==200){
            if(msg){
                message.error(msg)
            }
            throw new Error(msg)          
        }else{
              return data as any
        }
      
    }
)


export default request

export type ResType={
    code: number,
    msg?: string,
    data?: ResDataType,
}

export type ResDataType={
    [key:string]: any,
}

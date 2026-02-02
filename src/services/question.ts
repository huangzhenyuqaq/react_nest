import axios from "./ajax"
import type {ResDataType} from "./ajax"


export async function getQuestionService(id:string):Promise<ResDataType>{
    const url=`/api/question/${id}`
    const data=(await axios.get(url)) as ResDataType
    return data

}

export async function createQuestionService():Promise<ResDataType>{
    const url=`/api/question/`
    const response = await axios.post(url)
  const data = response as ResDataType
  console.log("创建问卷返回的数据:", data)
  return data
}

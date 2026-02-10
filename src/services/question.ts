import axios from "./ajax"
import type {ResDataType} from "./ajax"

type searchOption={
    keyword:string,
    isStar?:boolean,
    isDelete?:boolean,
    page:number,
    pageSize:number,
}

export async function getQuestionService(id:string):Promise<ResDataType>{
    const url=`/api/question/${id}`
    const data=(await axios.get(url)) as ResDataType
    return data

}

export async function createQuestionService():Promise<ResDataType>{
    const url=`/api/question`
    const response = await axios.post(url)
  const data = response as ResDataType
  return data
}


export async function getQuestionListService(opt:Partial<searchOption>={}):Promise<ResDataType>{
    const url=`/api/questionList`
    console.log("url",url)
    const data=(await axios.get(url,{params:opt})) as ResDataType
    return data
}

export async function updateQuestionService(id:string,opt:{[key:string]:any}):Promise<ResDataType>{
    const url=`/api/question/${id}`
    const data=(await axios.patch(url,opt)) as ResDataType
    return data
}

//复制问卷
export async function duplicateQuestionService(id:string):Promise<ResDataType>{
    const url=`/api/question/duplicate/${id}`
    const data=(await axios.post(url)) as ResDataType
    return data
}
//恢复问卷
export async function recoverQuestionService(opt:{[key:string]:any}):Promise<ResDataType>{
    const url=`/api/question/recover`
    const data=(await axios.post(url,opt)) as ResDataType
    return data
}
//删除问卷
export async function deleteQuestionService(opt:{[key:string]:any}):Promise<ResDataType>{
    const url=`/api/question/delete`
    const data=(await axios.post(url,opt)) as ResDataType
    return data
}
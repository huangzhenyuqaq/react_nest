import {useParams} from 'react-router-dom'
import {getQuestionListService} from '../services/question'
import {useRequest} from 'ahooks'

type optionType={
    keyword?:string,
    isStar?:boolean,
    isDelete?:boolean,
    page:number,
    pageSize:number,
}
function useLoadSearchListData(opt:Partial<optionType>={}){
    const {keyword,isStar=false,isDelete=false,page=1,pageSize=10}=opt
    async function getQuestionList(){
        const data=await getQuestionListService(opt)
        return data
    }
    const {loading,data,error,run}=useRequest(getQuestionList,{manual:true})
    return {
        loading,
        data,
        error,
        searchList: run,
    }
}

export default useLoadSearchListData

import {useSearchParams} from 'react-router-dom'
import {useRequest} from 'ahooks'
import {getQuestionListService} from '../services/question'
import {LIST_SEARCH_PARAM_KEY} from '../constant/index'

function useLoadQuestionListData(){
    const [searchParams]=useSearchParams()

    const {loading,data,error}=useRequest(async ()=>{
        const keyword=searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
        const data= await getQuestionListService({keyword})
        return data
    },{
        refreshDeps:[searchParams],
    })
    return {loading,data,error}
}

export default useLoadQuestionListData
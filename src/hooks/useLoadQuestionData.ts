import {useParams} from 'react-router-dom'
import {getQuestionService} from '../services/question'
import {useRequest} from 'ahooks'



function useLoadQuestionData(){
    const {id}=useParams<{id:string}>()
    // const [loading, setLoading] = useState(false);
    // const [question, setQuestion] = useState({})
    // useEffect(()=>{
    //    async function getQuestion(){
    //       const data=await getQuestionService(id||'')
    //       setQuestion(data||{})
    //       setLoading(false)
    //    }
    //    getQuestion()
    // },[id])
    // return {
    //     loading,
    //     question,
    // }
    async function getQuestion(){
        const data=await getQuestionService(id||'')
        return data
    }
    const {loading,data,error}=useRequest(getQuestion)
    return {
        loading,
        data,
        error,
    }
}

export default useLoadQuestionData

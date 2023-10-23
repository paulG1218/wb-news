import axios from "axios"

const initialState = {
    loading: false,
    articles: []
}

const requestArticles = async (dispatch) => {
    dispatch({
        type: 'PENDING'
    })
    const articles = await axios.get('/api/hacker-news')
    dispatch({
        type: 'REQUEST_ARTICLES',
        payload: articles.data
    })

}



const reducer  = (state = initialState, action) => {
    switch (action.type) {  
        case 'PENDING':
            return {...state, loading: true}
            
        case 'REQUEST_ARTICLES':
            return {
                loading: false,
                articles: action.payload
            }
            default:
                 return state
    }
}

export default reducer
export {requestArticles}
import axios from 'axios'

const initialState = {
    loading: true,
    articles: []
}

const requestArticles = async (dispatch) => {
    dispatch({type: 'PENDING'})
    let articles = await axios.get('/api/medium')
    dispatch({
        type: 'REQUEST_ARTICLES',
        payload: articles.data
    })
}

const mediumReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PENDING' :
            return {
                ...state,
                loading: true
            }
        case 'REQUEST_ARTICLES':
            return {
                loading: false,
                articles: action.payload
            }
            default:
                return state
    }
}

export default mediumReducer
export {requestArticles}
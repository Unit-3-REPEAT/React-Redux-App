import axios from 'axios';


export const FETCH_QUOTE_START = "FETCH_QUOTE_START";
export const FETCH_QUOTE_SUCESS = "FETCH_QUOTE_SUCESS";
export const FETCH_QUOTE_FAIL = "FETCH_QUOTE_FAIL";


export const fetchQuote = () => {
    return dispatch => {
        dispatch({ type: FETCH_QUOTE_START })
        axios
        .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => {
            //  console.log(`response`, response)

        dispatch({type: FETCH_QUOTE_SUCESS, payload: response.data})   

        })
        .catch((err) => {
            // console.log(`--->`, err.response)
            dispatch({type: FETCH_QUOTE_FAIL, payload:`Sorry! ${err.response.data}`})
        })
        
    }
    
}
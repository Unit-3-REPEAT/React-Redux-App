//Set up reducer
import {FETCH_QUOTE_START, FETCH_QUOTE_SUCESS, FETCH_QUOTE_FAIL} from '../actions/index';

export const initialState = {
    quote:'',
    isFetching: '',
    error:''    
    }

export const quoteReducer = (state = initialState,action) => {

    switch(action.type){
        case FETCH_QUOTE_START:
            return {
                ...state,
                isFetching:true
        }
        
        case FETCH_QUOTE_SUCESS:
            return {
                ...state,
                isFetching: false,
                quote: action.payload,
                error: ''
            }

        case FETCH_QUOTE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }    


        default:
            return state
    }

}    

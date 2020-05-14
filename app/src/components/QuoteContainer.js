import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchQuote} from '../actions/index';
import '../App.css';


const QuoteContainer = (props) => {
    // console.log(`this is props inside QuoteContainer`, props)

    useEffect(() => {
        props.fetchQuote();
    }, [])




  return (
    <div className="QuoteContainer">
        
        {/* if the quote exists display it */}
        {props.quote && <h2>{props.quote}</h2>}
        {/* if the quote doesn't exist display error message */}
        {props.error && <h2 className="errorMessage">{props.error}</h2>}


        <button className="fetchButton" onClick={props.fetchQuote}>Fetch a Quote</button>
    </div>
  );
}

const mapStateToProps = state => {
    // console.log(`mSTP props inside QuoteContainer.js -->`, state)
    return {
        quote: state.quoteReducer.quote,
        isFetching: state.quoteReducer.isFetching,
        error: state.quoteReducer.error

        //in this case to set mSTP we have to use quote: state.quoteReducer.quote
        //because of nested reducer inside index.js inside reducers folder
    }
    
}
export default connect(mapStateToProps,{fetchQuote}) (QuoteContainer);

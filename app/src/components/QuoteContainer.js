import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchQuote} from '../actions/index';
import Loader from 'react-loader-spinner';
import '../App.css';



const QuoteContainer = (props) => {
     console.log(`this is props inside QuoteContainer`, props)

     const {quote} = props;
     console.log(`--->`, quote)

    useEffect(() => {
        props.fetchQuote();
    }, []) // DO NOT PUT IT props.quote or quote, props, don't remove - either way results in rapidly 
    //changing quote




  return (
    <div className="QuoteContainer">

        {/* if the  isFetching is still fetching run the loader*/}
        {props.isFetching && 
                <Loader
                    type="TailSpin" 
                    color="#00BFFF"
                    height={80} 
                    width={80}
                    timeout={3000}
                />}
        
        {/* if the quote exists display it */}
        {props.quote && <h2>{`"${props.quote}"`}</h2>}
        {/* if the quote doesn't exist display error message */}
        {props.error && <h2 className="errorMessage">{props.error}</h2>}


        <button className="fetchButton" onClick={props.fetchQuote}>Fetch a New Quote</button>
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

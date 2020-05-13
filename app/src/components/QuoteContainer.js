import React, {useEffect} from 'react';
import {connect} from 'react-redux';



const QuoteContainer = (props) => {
    console.log(`this is props insdie QuoteContainer`, props)

    // useEffect(() => {
    //     props.fetchQuote();
    // }, [])




  return (
    <div className="QuoteContainer">
        {props.quote}
    </div>
  );
}

const mapStateToProps = state => {
    console.log(`mSTP props inside Header.js -->`, state)
    return {
        quote: state.quoteReducer.quote,
        isFetching: state.quoteReducer.isFetching,
        error: state.quoteReducer.error

        //in this case to set mSTP we have to use quote: state.quoteReducer.quote
        //because of nested reducer inside index.js inside reducers folder
    }
    
}
export default connect(mapStateToProps,{ }) (QuoteContainer);

import React from 'react';
import './App.css';

import {connect} from 'react-redux';
import Header from './components/Header';
import QuoteContainer from './components/QuoteContainer';



const App = (props) => {
// console.log(`this is props inside App.js -->`, props)

  return (
    <div className="App">
      <Header/>
      <QuoteContainer/>      
    </div>
  );
}



//Connect component to redux store
//We are not using any state in this component so we dont really need a connect here
export default connect (null,{}) (App);


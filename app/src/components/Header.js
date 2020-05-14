import React from 'react';
import {connect} from 'react-redux';
import '../App.css';



const Header = (props) => {
    // console.log(`this is props inside Header.js`, props)
  return (
    <div className="Header">
       <h1 className="swansonHeader">Swanson's Quotes:</h1>   
    </div>
  );
}


const mapStateToProps = state => {
    // console.log(`mSTP props inside Header.js -->`, state)
    return state
    
}
export default connect(mapStateToProps,{ }) (Header);



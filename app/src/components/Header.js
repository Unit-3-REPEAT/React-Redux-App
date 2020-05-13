import React from 'react';
import {connect} from 'react-redux';




const Header = (props) => {
    console.log(`this is props inside Header.js`, props)
  return (
    <div className="Header">
       <h1>HEADER</h1>   
    </div>
  );
}


const mapStateToProps = state => {
    console.log(`mSTP props inside Header.js -->`, state)
    return state
    
}
export default connect(mapStateToProps,{ }) (Header);



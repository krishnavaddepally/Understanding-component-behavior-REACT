import React from 'react';

const Grocery=props=> {

  return(
    <ul>
      <li> {props.name}
      <button onClick={props.clickFunction}> Delete </button>
      </li>
    </ul>
  )
};

export default Grocery

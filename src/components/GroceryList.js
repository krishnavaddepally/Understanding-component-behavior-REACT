import React from 'react';
import Grocery from './Grocery'

const GroceryList=props=> {
  let clickFunction= props.handleButtonClick

  let arrayListItems= props.groceries.map(element=>{
    return(
      <Grocery
        key={element.id}
        name={element.name}
        clickFunction={clickFunction}
      />
    )
  })


  return(
    <div>
      {arrayListItems}
    </div>
  )
};


export default GroceryList

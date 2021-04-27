import React from 'react'

 const Main = (props) => {
    const { product,onAdd } = props;
    return (
      <div >
       
       
         
        <div >
          <button
          onClick = {() => onAdd(product)}> <h3>{product.name}</h3></button>
        </div>
      </div>
    ); 
}
export default Main;

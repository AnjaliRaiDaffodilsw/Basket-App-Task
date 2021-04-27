import React from 'react'

function Basket(props) {
    const { cartItems,onRemove, allRemove } = props;
    
    return (
        <>
            <div className="block col-1">
                <h2>🧺</h2>
                <h2> Basket</h2>
               
             
                <div>
                    {cartItems.length === 0 && <div>Ohps there is nothing in the Cart !! 😢 </div>}
                </div>
                
                
                <button 
             onClick={() => allRemove()} ><h3 style = {{
                 display : cartItems.length === 0  ? 'none': 'block'
             }}>❌ </h3> </button>
             
                {cartItems.map((item) => (
                    <div key={item.name} className="display">
                         <div >
              <button
                  onClick = { ()=>onRemove(item)}> <h3 style={{
                    textDecoration:item.qty===null ? 'line-through'  : 'none'
                }} >❎ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.qty}     {item.name}</h3></button>
                </div>
                    </div>

                ))}
            </div>
        </>

    )
}

export default Basket

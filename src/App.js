import './App.css';
import Header from './Header'

import Groceries from './container/Groceries';
import React, { useState } from 'react';
import Basket from './container/Basket';
import Footer from "./Footer";

const products = [
    { name: 'Strawberry' ,id : 1},
    { name: 'Blueberry',id : 2 },
    { name: 'Banana' ,id : 3},
    { name: 'Apple',id : 4},
    { name: 'Carrot',id : 5},
    { name: 'Celery',id : 6},
    { name: 'Mushroom' ,id : 7},
    { name: 'Potato' ,id : 8},
    { name: 'Eggs',id : 9},
    { name: 'Cheese',id : 10},
    { name: 'Butter' ,id : 11},
    { name: 'Chicken' ,id : 12},
    { name: 'Beef' ,id : 13},
    { name: 'Pork',id : 14},
    { name: 'Fish',id : 15 },
    { name: 'Rice',id : 16},
    { name: 'Pasta',id : 17},
    { name: 'Bread',id : 18 },

];


function App() {
    const [cartItems, setCartItems] = useState([]);
   


    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? {...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, {...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {

        const exist = cartItems.find((x) => x.id === product.id);
        // if (exist.qty === 1) {
        //     setCartItems(cartItems.filter((x) => x.type !== product.type));
        // } else {
        //     setCartItems(
        //         cartItems.map((x) =>
        //             x.type === product.type ? {...exist, qty: null } : x
        //         )
        //     );
        // }
        setCartItems(
                    cartItems.map((x) =>
                        x.id === product.id ? {...exist, qty: null } : x
                    )
        );


    }

    const allRemove = () => {
        setCartItems([]);
    }
    return ( <div>

        <Header/>
     
       <Groceries
          onAdd={onAdd} 
          products={products} 
       /> 
        <Basket onAdd = { onAdd }
        allRemove = { allRemove }
        onRemove = { onRemove }
        cartItems = { cartItems }

        /> <Footer
        cartItems = {[]}/>

        </div>
    );
}

export default App;
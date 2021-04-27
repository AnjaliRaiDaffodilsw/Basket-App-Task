import React,{useState} from 'react'
import Showitem from './Main';
 

 const Groceries = (props) => {
    const {products ,onAdd} = props;
    const [searchTerm , setSearchTerm] = useState("");
    return (
      <>
             <nav >
        
        <form >
    
        <input type = "text" 
   
        placeholder = "filter for e.g. Apple onChange (not implemented)"
        onChange = {event => {
          (setSearchTerm(event.target.value))
          event.preventDefault();
        } }
        />   

       
        </form> 
       </nav>
      <main className="grow">          
          <h2>🥬Groceries</h2>
           <div className="display">
           {products.filter((value) => {
             if(searchTerm === "") {
              return value;
            } else if(value.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
              return <Showitem key={value.name} value={value} 
              onAdd = {onAdd}
              > </Showitem>
            }

           }).map((product) => (
          <Showitem key={product.id} product={product} 
          onAdd = {onAdd}
          > </Showitem>
        ))}
      </div>
    </main>
    </>
    )
}

export default Groceries;
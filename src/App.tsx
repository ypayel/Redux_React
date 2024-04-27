import React, { useContext } from 'react';
import { ProductCart, ProductCartProvider } from './components/context/ProductCart';


function App() {
  const {product, addItem, deleteItem, sumItem, clearItem} = useContext(ProductCart)
  return (
    <div className="App">
      <ProductCartProvider>
      <p>Number: {product}</p>
            <button onClick={addItem}>Add Item</button>
            <button onClick={deleteItem}>Delete Item</button>
            <button onClick={sumItem}>Sum Item</button>
            <button onClick={clearItem}>Clear Item</button>
        </ProductCartProvider>
    </div>
  );
}

export default App;

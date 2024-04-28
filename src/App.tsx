import React, { useContext, useState } from 'react';
import { ProductCart, ProductCartProvider } from './components/context/ProductCart';
import { SongContext, SongContextProvider } from './components/context/SongContext';


function App() {
  const {product, addItem, deleteItem, sumItem, clearItem} = useContext(ProductCart)
  const {song, addFavList, remove} = useContext(SongContext)
  return (
    <div className="App">
      <SongContextProvider>
      <h2>lista piosenek</h2>
      <p>ilość piosenek: {song.length}</p>
      <button
        onClick={() =>
          addFavList({
            id: 2,
            title: "Blinding Lights",
            artist: "The Weeknd",
            duration: "3:20",
            album: "After Hours",
          })
        }
      >
        Add to fav
      </button>
      <button onClick={() => remove}>Remove Song</button>
       </SongContextProvider>
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

import React, { useContext, useState } from 'react';
import { ProductCart, ProductCartProvider } from './components/context/ProductCart';
import { SongContext, SongContextProvider } from './components/context/SongContext';
import { useAppDispatch, useAppSelector } from './components/redux/Counter/hook';
import { toggleTheme } from './components/redux/slice';
import { decrement, increment } from './components/redux/Counter/slice';




function App() {
  
  const dispatch = useAppDispatch();
  // const { isDarkMode } = useAppSelector((state) => state.appReducer);

  // const handleTheme = () => dispatch(toggleTheme());
  

  const { count } = useAppSelector((state) => state.appReducer)
const handleIncrement = () => dispatch(increment())
const handleDecrement = () => dispatch(decrement())
return (
    <div className="App">
      <p>Number: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      {/* <button onClick={handleTheme}>Toggle theme</button> */}
      {/* <SongContextProvider>
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
        </ProductCartProvider> */}
    </div>
  );
}

export default App;



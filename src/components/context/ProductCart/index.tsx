//Utwórz kontekst, który będzie zarządzać zawartością 
// koszyka zakupowego w aplikacji internetowej. Kontekst 
// powinien umożliwiać dodawanie i usuwanie produktów z 
// koszyka oraz obliczanie całkowitej wartości zamówienia. 
// Następnie stwórz komponenty, które wykorzystają ten 
// kontekst do wyświetlania koszyka zakupowego i interakcji 
// z nim.

import React from "react";
import { useState } from "react";
import { createContext } from "react";


// tworze kotekst
// napisac dwe funkcje jak jedna dodaje, a druga usuwa z koszyka
//napisac funkcje jak dodaje summe wszystkich productow z koszyka
//stworzyc komponent
// wyswietlic w komponencie resultat


type ProductCartType = {
    product: number;
    addItem: () => void;
    deleteItem: () => void;
    sumItem: () => void;
    clearItem: () => void;
}

export const ProductCart = createContext<ProductCartType>(
    {} as ProductCartType
);

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const ProductCartProvider = ({children} : Props) => {
const [product, setProduct] = useState(0);

const addItem = () => {
    setProduct((prev) => prev + 1)
}

const deleteItem = () => {
    setProduct((prev) => prev - 1)
}

const sumItem = () => {
    setProduct((prev) => prev + prev)
}

const clearItem = () => {
    setProduct((prev) => prev - prev)
}
return (
    <ProductCart.Provider value ={{
        product,
         addItem,
         deleteItem,
         sumItem,
         clearItem
    }}>

        {children} 
    </ProductCart.Provider>
)
}


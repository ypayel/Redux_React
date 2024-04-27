// 6. Utwórz komponent List który wyświetla liste elementów (komponentów ListItem - mają być oddzielnym elementem),
// lista ma byc przechowywana jako stan komponentu i pobierana z fake API po odpaleniu useEffect
// https://dummyjson.com/docs/products

import { useEffect, useState } from "react";
import { ListItem } from "./ListItem/index";

type Product = {
  id: number;
  title: string;
};

export const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) throw new Error("cannot fetch products!");

      const { products } = await res.json();

      if (products) setList(products);
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Nasza lista elementów</h2>
      {isLoading ? (
        <p>Uwaga ładuję się dalej!</p>
      ) : (
        <ul>
          {list.map(({ id, title }) => (
            <ListItem key={id} title={title} />
          ))}
        </ul>
      )}
    </div>
  );
};
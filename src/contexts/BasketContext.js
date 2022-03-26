import { createContext, useState } from 'react';

import API from '../APIClient';

export const BasketContext = createContext();

export default function BasketContextProvider({ children }) {
  const [productsList, setProductsList] = useState(null);
  const [basketItems, setBasketItems] = useState([]);

  const getProducts = async () => {
    API.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then((response) => response.data)
      .then((data) => {
        setProductsList(data);
      });
  };

  const changeQuantity = (quantity, id) => {
    const productToUpdate = basketItems?.find((product) => product.id === id);
    if (quantity === 0) {
      if (productToUpdate)
        setBasketItems(basketItems.filter((product) => product.id !== id));
    } else if (productToUpdate) {
      setBasketItems(
        basketItems.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity,
              }
            : item
        )
      );
    } else {
      setBasketItems((itemsList) => [...itemsList, { id, quantity }]);
    }
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        changeQuantity,
        getProducts,
        productsList,
        setBasketItems,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

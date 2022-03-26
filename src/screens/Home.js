import { useContext, useEffect } from 'react';

import { BasketContext } from '../contexts/BasketContext';

export default function Home() {
  const { getProducts, productsList, basketItems, changeQuantity } =
    useContext(BasketContext);

  useEffect(() => {
    getProducts();
  }, []);

  const handleChangeQuantity = (e, id) => {
    e.preventDefault();
    const quantity = parseInt(e.target.quantity.value, 10);
    changeQuantity(quantity, id);
  };

  return (
    <div className="m-6">
      <div className="text-center my-5 text-4xl font-bold">
        Liste des produits disponibles
      </div>
      <ul className="w-full flex flex-wrap gap-5 justify-around ">
        {productsList?.map((product) => {
          const basketData = basketItems.find((item) => item.id === product.id);

          return (
            <li key={product.id}>
              <form
                onSubmit={(e) => handleChangeQuantity(e, product.id)}
                className="bg-white rounded-xl p-3 w-96 flex flex-col gap-2 items-center"
              >
                <img
                  src={product.url}
                  alt={product.title}
                  className="w-48 m-auto"
                />
                <div className="text-center font-bold">{product.title}</div>
                <label
                  className="flex w-full mt-5 flex-col items-center"
                  htmlFor="quantity"
                >
                  Quantité
                  <input
                    className="w-20 p-1 border border-black rounded text-center"
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="0"
                    defaultValue={basketData?.quantity || 0}
                  />
                </label>
                <button
                  className="w-48 font-bold rounded bg-blue-500 hover:bg-blue-800 text-white m-5 p-2"
                  type="submit"
                >
                  Ajouter au panier
                </button>
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

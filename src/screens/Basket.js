import { useContext } from 'react';

import { BasketContext } from '../contexts/BasketContext';

export default function Basket() {
  const { productsList, basketItems, changeQuantity, setBasketItems } =
    useContext(BasketContext);

  const handleChangeQuantity = (e, id) => {
    e.preventDefault();
    const quantity = parseInt(e.target.value, 10);
    changeQuantity(quantity, id);
  };

  const deleteProduct = (e, id) => {
    setBasketItems(basketItems.filter((product) => product.id !== id));
  };

  return (
    <div className="m-6">
      <div className="text-center my-5 text-4xl font-bold">Mon panier</div>
      <ul>
        {basketItems?.map((product) => {
          const productData = productsList.find(
            (item) => item.id === product.id
          );

          return (
            <li key={product.id} className="">
              <div className="inline-block my-5 bg-white rounded-xl p-3 ">
                <div className="flex gap-5 items-center grow-0">
                  <img
                    src={productData.url}
                    alt={productData.title}
                    className="w-48"
                  />
                  <div className="text-center font-bold max-w-xs">
                    {productData.title}
                  </div>
                  <label
                    className="flex flex-col items-center"
                    htmlFor="quantity"
                  >
                    Quantité
                    <input
                      className="ml-2 w-20 p-1 border border-black rounded text-center"
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="0"
                      defaultValue={product.quantity}
                      onChange={(e) => handleChangeQuantity(e, product.id)}
                    />
                  </label>
                  <button
                    className="w-48 font-bold rounded bg-blue-500 hover:bg-blue-800 text-white m-5 p-2"
                    type="button"
                    onClick={(e) => deleteProduct(e, product.id)}
                  >
                    Supprimer le produit
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

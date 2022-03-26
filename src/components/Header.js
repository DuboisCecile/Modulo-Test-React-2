import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faTimes,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import { BasketContext } from '../contexts/BasketContext';

export default function Header() {
  const { basketItems } = useContext(BasketContext);
  const [burger, setBurger] = useState(false);

  const handleBurgerToggle = () => {
    setBurger(!burger);
  };

  const closeBurger = () => {
    setBurger(false);
  };

  return (
    <header className="w-full h-auto flex bg-blue-500">
      <div className="w-full px-4 justify-between items-center flex flex-wrap">
        <div className="my-4 w-full relative flex justify-between lg:w-auto lg:static lg:block ">
          <NavLink
            className="logo-font text-white text-3xl md:text-6xl"
            path="/"
            to="/"
          >
            Cécil'shop
          </NavLink>

          <button
            className="lg:hidden"
            type="button"
            onClick={handleBurgerToggle}
          >
            <FontAwesomeIcon
              className="flex text-white"
              icon={burger ? faTimes : faBars}
            />
          </button>
        </div>

        <div
          className={`lg:flex flex-grow items-center ${
            burger ? ' flex' : ' hidden'
          }`}
        >
          <ul className="w-full flex flex-col lg:flex-row list-none lg:justify-end lg:items-center gap-5">
            <li>
              <NavLink
                to="/"
                className="px-3 py-2 text-xl uppercase font-bold text-white hover:opacity-75"
                onClick={closeBurger}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/basket"
                className="px-3 py-2 flex items-center text-white hover:opacity-75"
                onClick={closeBurger}
              >
                <FontAwesomeIcon className="text-4xl" icon={faShoppingBasket} />

                <div className="ml-2 text-xl text-white px-2 bg-red-400 rounded-full flex justify-center items-center leading-snug align-middle">
                  {basketItems?.length}
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

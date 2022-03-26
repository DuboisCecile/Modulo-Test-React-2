import { Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Basket from './screens/Basket';

export default function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/basket" element={<Basket />} />
    </Routes>
  );
}

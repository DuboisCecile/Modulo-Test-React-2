import '@fortawesome/fontawesome-free/css/all.min.css';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';

import Main from './Main';
import Header from './components/Header';
import BasketContextProvider from './contexts/BasketContext';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-200">
      <BasketContextProvider>
        <Header />
        <Main />
      </BasketContextProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}

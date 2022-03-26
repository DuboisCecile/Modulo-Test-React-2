import '@fortawesome/fontawesome-free/css/all.min.css';

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
    </div>
  );
}

import logo from './logo.svg';
import './App.css';
import NewProduct from './pages/NewProduct';
import HighBudgetPage from './pages/HighBudgetPage';
import Cart from './pages/Cart';
import LowBudgetPage from './pages/LowBudgetPage';
//import LowBudgetPage from './pages/LowBudgetPage';
//import SingleProduct from './pages/SingleProduct';
//<SingleProduct />
//<LowBudgetPage />
/* <HighBudgetPage /> */

/* <Cart /> */

function App() {
  return (
    <div className='App'>
      <NewProduct />
      <LowBudgetPage />
      <Cart />
    </div>
  );
}

export default App;

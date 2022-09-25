import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import CartPage from './components/pages/CartPage';
import CustomThemeProvider from './CustomThemeProvider';

function App() {
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([]);

  const loginHandler = (loginUser) => {

    setUser(loginUser)
    setIsLogged(true)
  }

  const newCartHandler = (item) => {

    setShoppingCart(prev => {
      return [...prev, item]
    })
  }

  const emptyHandler = () => {
    setShoppingCart(prev => {
      return []
    })
  }

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/sign-in' element={<LoginPage onLogin={loginHandler} isLogged={isLogged} />}></Route>
          <Route path="/" element={<HomePage isLogged={isLogged} onNewCart={newCartHandler} />} />

          <Route path="/cart" element={<CartPage emptyHandler={emptyHandler} cartItems={shoppingCart} isLogged={isLogged} />} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;

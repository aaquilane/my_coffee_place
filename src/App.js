import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { db } from "./db/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";

import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetail from './components/items/ItemDetail';
import CartContextProvider from './components/contexts/CartContext';
import CartDetail from './components/cart/CartDetail';
import Layout from './components/Layout';
import Orders from './components/orders/Orders';
import Loading from './components/Loading';


function App() {

  const [endLoading, setEndLoading] = useState(false);

  //******* CATEGORIES *******
  const [categ, setCateg] = useState([]);
  const categCollectionRef = collection(db, "categories");

  const getCategories = async () => {
    const data = await getDocs(categCollectionRef);
    setCateg(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getCategories();
  }, []);

  //******* MENU PRODUCTS *******
  const [menu, setMenu] = useState([]);
  const menuCollectionRef = collection(db, "products");

  const getMenu = async () => {
    const data = await getDocs(menuCollectionRef);
    setMenu(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setEndLoading(true);
  };

  useEffect(() => {
    getMenu();
  }, []);


  return (
      <CartContextProvider>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout categ={categ} />}>
                    <Route index element={<Navigate to="/category/SANDWICHES" />} />
                    <Route path="/category/:categoryName" element={<ItemListContainer menu={menu} />} />
                    <Route path="/product/:productId" element={<ItemDetail menu={menu} />} />
                    <Route path="/cart" element={<CartDetail />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
            {!endLoading && <Loading/>}
          </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;

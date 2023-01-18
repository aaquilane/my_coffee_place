import { useState, createContext } from "react";

const initialState = {
    total_quantity: 0,
    total_price: 0,
    products : [],
    addProduct: () => null,
    removeProduct: () => null,
    emptyCart: () => null,
  };
  
export const CartContext = createContext(initialState);


const CartContextProvider = ({ children }) => {
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartPrice, setCartPrice] = useState(0);
    const [cartProducts, setCartProducts ] = useState([]);
    
    //****    Add product to cart   ******
    const addProduct = (product, prodQty) => {

          const productLine = {
            "product_id" : product.id,
            "product_name" : product.name,
            "product_price" : product.price,
            "product_quantity": prodQty,
            "product_subtotal": prodQty * product.price
          }
          const newArrayProducts = cartProducts;

          //Search product to add. 
          //If exists, remove product and then add product. If doesn't exist, directyly add product
          const indexFound = cartProducts.findIndex ( product => product.product_id === productLine.product_id);

          indexFound >= 0 && newArrayProducts.splice(indexFound, 1); //remove product with position indexFound

          newArrayProducts.push (productLine);   //add product

          recalcCart (newArrayProducts)
        };


    //****    Remove product from cart   ******
    const removeProduct = (productToRemove) => {
      const newArrayProducts = cartProducts;
      const indexFound = newArrayProducts.findIndex ( product => product.product_id === productToRemove.product_id);

      indexFound >= 0 && newArrayProducts.splice(indexFound, 1); //remove product with position indexFound
      recalcCart (newArrayProducts)
    }
  
    const emptyCart = () => {
      const newEmptyArrayProducts = []
      recalcCart (newEmptyArrayProducts)
    }

    //****    Recalculate cart and change context   ******
    function recalcCart (newArrayProducts) {
      setCartProducts (newArrayProducts)
      let {newCartQuantiy, newCartPrice} = recalcCartDetail (newArrayProducts);
      setCartQuantity (newCartQuantiy);
      setCartPrice (newCartPrice);
    }    

    //****    Recalculate cart detail  ******
    function recalcCartDetail (newArrayProducts) {
        let newCartQuantiy = 0;
        let newCartPrice = 0;
        newArrayProducts.forEach(prod => {
            newCartQuantiy = newCartQuantiy + prod.product_quantity;
            newCartPrice = newCartPrice + prod.product_subtotal;
        });
        return {newCartQuantiy, newCartPrice}
    }

  
    const value = {
      cartQuantity: cartQuantity,
      cartPrice: cartPrice,
      cartProducts: cartProducts,
      addProduct,
      removeProduct,
      emptyCart
    };
  
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
  };
  
  export default CartContextProvider;
  
import { useState, createContext } from "react";

const initialState = {
    purchase:{},
    addPurchase: () => null,
  };
  
export const PurchaseContext = createContext(initialState);


const PurchaseContextProvider = ({ children }) => {
   
    const [purchase, setPurchase] = useState({})

    const addPurchase = (myPurchase) => {
        setPurchase(myPurchase)
        console.log ("En el PROVIDER purchase agregada al context", purchase)
    }

    const restartPurchase = () => {
        setPurchase({})
        console.log ("purchase eliminada al context", purchase)

    }

    const value = {
        purchase: purchase,
        addPurchase,
        restartPurchase
    }
  
    return (
        <PurchaseContext.Provider value={value}>
            {children}
        </PurchaseContext.Provider>
    );
  };
  
  export default PurchaseContextProvider;
  
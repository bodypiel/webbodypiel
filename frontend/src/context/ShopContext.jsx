import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {
    const[all_products, setAll_products] = useState([])
    
    useEffect(() => {
            fetch('https://webbodypiel-2z3h.onrender.com/allproducts')
                .then((response) => response.json())
                .then((data) => setAll_products(data))
    },[])

    const contextValue = {all_products}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
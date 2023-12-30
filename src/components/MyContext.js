import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const MyContext = createContext();

export function ProductsProvider({ children }) {
const [ data , setData ] = useState([]);



useEffect(() => {
async function fetchProductos() {
    try {
    const response = await axios.get("./Trabajos.json")
    console.log(response.data)
        setData(response.data)
    }
    catch(error) {
        console.log('Error fetching Pokemon data');
    }
}



fetchProductos();
}, []);

return (
<MyContext.Provider value={{ data }}>
    {children}
</MyContext.Provider>
);
}

export function useProductsData() {
return useContext(MyContext);
}
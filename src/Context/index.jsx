import { createContext, useState } from "react"

//? este componente va a hacer el estado global que sera el carrito de compra de nuestro ecommerce

export const ShoppingCartContext =createContext()

//*children seran los distintos productos que le enviemos al carrito de compra

export const ShoppingCartProvider =({children})=>{

    const[count,setCount]=useState(0)
    

    return(
        
        //*EL estado debera estar cubriendo toda nuestra app para que sea global, por endes esta debera envolver todo tu app con el provider
        //*Ahora con value todos los componentes podran acceder a el estado global y tambien al modificador del estado(setCount)
        <ShoppingCartContext.Provider value={{
            count,setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
            
    )
}
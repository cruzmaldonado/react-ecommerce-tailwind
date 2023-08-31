import { createContext, useState } from "react"

//? este componente va a hacer el estado global que sera el carrito de compra de nuestro ecommerce

export const ShoppingCartContext =createContext()

//*children seran los distintos productos que le enviemos al carrito de compra

export const ShoppingCartProvider =({children})=>{

    //?Shopping cart count
    const[count,setCount]=useState(0)

    //? Product-Detail open/close produc detail
    const[isProductDetailOpen,setIsProductDetailOpen]=useState(false)    
    const openProductDetail=()=>setIsProductDetailOpen(true)
    const closeProductDetail=()=>setIsProductDetailOpen(false)

    //?product Detail show product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
      });
    

    return(
        
        //*EL estado debera estar cubriendo toda nuestra app para que sea global, por endes esta debera envolver todo tu app con el provider
        //*Ahora con value todos los componentes podran acceder a el estado global y tambien al modificador del estado(setCount)
        <ShoppingCartContext.Provider value={{
            count,setCount,
            openProductDetail,closeProductDetail,isProductDetailOpen,
            productToShow,setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
            
    )
}
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
    
    //? checkout-side-menu open/close produc detail
    const[isCheckoutSideMenu,setIsCheckoutSideMenu]=useState(false)    
    const openCheckoutSideMenu=()=>setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu=()=>setIsCheckoutSideMenu(false)



    //?product Detail show product
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
      });

      //? Este es un array de objeto que es el detallado de todos los productos que se agregan al carrito para la compra.
      const [cartProducts, setCartProducts] = useState([])
    
    return(
        
        //*EL estado debera estar cubriendo toda nuestra app para que sea global, por endes esta debera envolver todo tu app con el provider
        //*Ahora con value todos los componentes podran acceder a el estado global y tambien al modificador del estado(setCount)
        <ShoppingCartContext.Provider value={{
            count,setCount,
            openProductDetail,closeProductDetail,isProductDetailOpen,
            openCheckoutSideMenu,closeCheckoutSideMenu,isCheckoutSideMenu,
            productToShow,setProductToShow,
            cartProducts, setCartProducts,
        }}>
            {children}
        </ShoppingCartContext.Provider>
            
    )
}
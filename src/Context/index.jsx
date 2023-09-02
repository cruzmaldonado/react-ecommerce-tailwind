import { createContext, useEffect, useState } from "react"

//? este componente va a hacer el estado global que sera el carrito de compra de nuestro ecommerce

export const ShoppingCartContext =createContext()

//*children seran los distintos productos que le enviemos al carrito de compra

export const ShoppingCartProvider =({children})=>{

    

    
    

    
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

      //? Shopping Cart - Order
      const [order, setOrder] = useState([])


      //? get products
      const [items,setItems]=useState(null)
      const [filteredItems,setFilteredItems]=useState(null)

      const URL ='https://api.escuelajs.co/api/v1/products'
    useEffect(() => {
    fetch(URL)
    .then(response =>response.json())
    .then(data=> setItems(data))
    
  }, [])

    // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))

  }, [items, searchByTitle, searchByCategory])

   console.log('searchByTitle:',searchByTitle)
//   console.log('searchByCategory:',searchByCategory)
//   console.log('filteredItems:',filteredItems)
  
      
     
      
    return(
        
        //*EL estado debera estar cubriendo toda nuestra app para que sea global, por endes esta debera envolver todo tu app con el provider
        //*Ahora con value todos los componentes podran acceder a el estado global y tambien al modificador del estado(setCount)
        <ShoppingCartContext.Provider value={{
            openProductDetail,closeProductDetail,isProductDetailOpen,
            openCheckoutSideMenu,closeCheckoutSideMenu,isCheckoutSideMenu,
            productToShow,setProductToShow,
            cartProducts, setCartProducts,
            order, setOrder,
            items,setItems,
            searchByTitle, setSearchByTitle,
            filteredItems,
            searchByCategory, setSearchByCategory,

        }}>
            {children}
        </ShoppingCartContext.Provider>
            
    )
}
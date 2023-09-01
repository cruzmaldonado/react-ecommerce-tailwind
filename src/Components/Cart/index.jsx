import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'





const Cart =({item})=>{
    //*contex es la variable que nos permite acceder a los estados globales
    //*useContex es el estado que nos permite modificar el estado global
    //*ShoppingCartContext es donde se encuentran encapsulados los estados globales y sus modificadores (Set)
    const context = useContext(ShoppingCartContext)

    const showProduct=(item)=>{
        context.openProductDetail()
        context.setProductToShow(item)
    }

    //* la funcion addProductsToCart no solo añade productos al carrito sino que aumenta el contador de productos 
     const addProductsToCart=(event,item)=>{
        //! se esta creando un doble evento dandole click al icono '+', para evitar eso entramos al evento 
        //! del componente hijo y evitamos la propagacion con event.stopPropagation() 
        event.stopPropagation()
            context.setCount(context.count+1)
            context.setCartProducts([...context.cartProducts, item])
            context.openCheckoutSideMenu()
            context.closeProductDetail()
            

     }
     //! render icon muestra un icono de x o un check depediendo si el producto ya esta en el carrito
     const renderIcon=(id)=>{
        //*filter es un metodo de js para buscar un elemento segun un parametro
        //* isInCart es un boolenao si es true entonces el icono ya esta en el carrito
        const isInCart = context.cartProducts.filter(product=> product.id===id).length > 0


            //! El checkIcon no propaga ningun evento ya que no queremos añadir productor duplicados al carrito
        if(isInCart){  
            return( 
        <div 
            className="absolute top-0 right-0 flex justify-center items-center bg-gray-800 w-6 h-6 rounded-full m-2 p-1">
                <CheckIcon className="h-6 w-6 text-gray-100 cursor-pointer"/>
        </div> 
        )}
        else{
            return( 
            <div 
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
            onClick={(event)=>addProductsToCart(event,item)}>
            <PlusIcon className="h-6 w-6 text-black cursor-pointer"/>
            </div>
        )}
               
       
     }

    return(
        
    <div 
    onClick={()=>showProduct(item)} 
    className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 text-black text-xs rounded-lg m-2 px-2 py-0.5">{item.category.name} </span>
            <img className='w-full h-full object-cover rounded-lg ' src={item.images[0]} alt={item.title} />
            {
                renderIcon(item.id)
            }  
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light">{item.title}</span>
            <span className="text-md font-medium">${item.price}</span>

        </p>
    </div>
        )
}
export default Cart
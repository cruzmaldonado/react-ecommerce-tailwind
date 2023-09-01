import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCart from '../../Components/OrderCart'
import { totalPrice } from '../../util'


import './styles.css'


const CheckoutSiteMenu=()=>{

 //* overflow-y-scroll permite crear un scroll vertical cuando hay muchos productos 


    const context = useContext(ShoppingCartContext)
    console.log(context.cartProducts)

    //* esta funcion es para poder borrar elementos de nuestro carrito de compra , al presionar la x.
    const handleDelete =(id)=>{
        const filteredProducts = context.cartProducts.filter(product=> product.id !==id)
        context.setCartProducts(filteredProducts)
    }
   

    
    return(
        <aside
         className={`${context.isCheckoutSideMenu? 'flex' :'hidden'} checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`} >
            <div className='flex justify-between items-center px-3 pt-2 mb-2'>
                <h2 className='font-medium text-xl'>My order:</h2>
                <div>
                    <XMarkIcon onClick={()=>context.closeCheckoutSideMenu()} className="h-6 w-6 text-black cursor-pointer" />

                </div>
           
            </div>
           
            <div className='px-4 overflow-y-scroll'>
            {
                
                
                context.cartProducts.map(product=>(
                    <OrderCart 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images[0]}
                    price={product.price}
                    handleDelete ={handleDelete }
                    
                    />
                    
                    ) )
                }
            </div>

            <div className='px-4'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>
      </div>


          
        </aside>
    )
}
export default CheckoutSiteMenu






import { XMarkIcon } from "@heroicons/react/24/solid"
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"


const OrderCart =props =>{

    const {id,title,imageUrl,price,handleDelete }=props
    const context = useContext(ShoppingCartContext)

    
    let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
  }

    
    
   

return(
    <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title}/>
            </figure>
            <p className="text-sm font-light ">{title}</p>
        </div>
         {/* Esta seccion se va a usar tanto en el carrito de compra como en last order por ende debemos renderizarla o no depediendo  */}


         <div className="flex items-center gap-2">
            <p className="text-lg font-medium">{price}</p>
            {renderXMarkIcon}
        </div>

        
    </div>
)
}
export default OrderCart
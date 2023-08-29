import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import { PlusIcon } from '@heroicons/react/24/solid'


const Card =({item})=>{
    const context = useContext(ShoppingCartContext)
    return(
        
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 text-black text-xs rounded-lg m-2 px-2 py-0.5">{item.category.name} </span>
            <img className='w-full h-full object-cover rounded-lg ' src={item.images[0]} alt={item.title} />
            <div 
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
            onClick={()=>context.setCount(context.count+1)}>
                <PlusIcon className="h-6 w-6 text-black cursor-pointer"/>
            </div>  
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light">{item.title}</span>
            <span className="text-md font-medium">${item.price}</span>

        </p>
    </div>
        )
}
export default Card
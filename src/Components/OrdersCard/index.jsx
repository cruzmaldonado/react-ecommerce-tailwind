import { ChevronRightIcon} from "@heroicons/react/24/solid"
import { useContext } from 'react'
import { ShoppingCartContext } from "../../Context"


const OrdersCard =props =>{

   const context = useContext(ShoppingCartContext)
   const {totalPrice,totalProducts}=props
    

 return(
     <div className="flex justify-between items-center mb-3 border border-black rounded-lg  w-80 p-4">

         <div className="flex justify-between w-full">
            <p className="flex flex-col">

                <span>01.02.2023</span>
                <span className="font-light">{totalProducts} aricles</span>
            </p>
            <p className="flex items-center gap-2">

             <span className="font-medium text-2xl">${totalPrice}</span>
             <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
            </p>
         </div>

     </div>
 )
 }
 export default OrdersCard




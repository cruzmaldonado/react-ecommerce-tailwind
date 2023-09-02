import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>  
      <div className="flex w-80 item-center justify-center relative mb-4">
        
        <h1 className="font-medium text-xl">My orders</h1>
      </div>
      
      {

        context.order?.map((order,index)=>(

          <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard  
          totalPrice={order.totalPrice} 
          totalProducts={order.totalProducts}/>
          
          </Link>
        ))

      }
      </Layout>
      
    )
  }
  
  export default MyOrders
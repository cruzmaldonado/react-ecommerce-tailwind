import Layout from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from '../../Context'
import OrderCart from '../../Components/OrderCart'
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"

function MyOrder() {

  const context = useContext(ShoppingCartContext)
  //* window.location.pathname nos permite saber exactamente la URl en la que estamos
  const currentPath =window.location.pathname
  //?currentPath.substring substrae el valor desde el idice solicitado
  //? de la ruta /my-orders/last currentPath.lastIndexOf("/") nos devuelve 10 que equivale a el ultimo / - 1
  //? Como queremos borrar todo el valor del string del currentPath hasta el / sumanos 1

  //* index funcina tanto para mostrar la ultima orden cuando hacemos el checkout en my orden como
  //* para mostrar el total de las ordenes cuando llamaos a OrderCart

  let index= currentPath.substring(currentPath.lastIndexOf("/") + 1)
  if(index==='last')
    index= context.order?.length-1
  
  

 
    return (
      <Layout>
       <div className="flex w-80 item-center justify-center relative mb-6">
        <Link to='/my-orders' className="absolute left-0">
        <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link >
        <h1>My order</h1>
      </div>

       <div className='flex flex-col w-80'>
            {
                
                  // order?.slice(-1)[0] nos muestra el ultimo elemento (el ultimo pedido guardado en order)
                  context.order?.[index]?.products.map(product => (
                    <OrderCart 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images[0]}
                    price={product.price}
                    
                    />
                    
                    ) )
                }
            </div>

      </Layout>  
    )
  }
  
  export default MyOrder
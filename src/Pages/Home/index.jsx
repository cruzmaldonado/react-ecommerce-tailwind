import { useContext } from "react"
import Layout from "../../Components/Layout"
import Cart from "../../Components/Cart"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
  
  const context = useContext(ShoppingCartContext)

  const renderView =()=>{
    
      if(context.filteredItems?.length > 0){
        return(
          context.filteredItems?.map(item=>(
          <Cart key ={item.id} item={item}/>
          
              )
                                            ))
      }   
      else{
        return(

          <div> we do not have anything</div>
          )
        }
      }


  return (
    <Layout>
     <div className="flex w-80 item-center justify-center relative mb-4">
        
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input 
      type="text" 
      placeholder="Find your ideal product"
      className="rounded-lg border border-black w-80 p-4 mb-6 focus:outline.none focus:w-1/2"
      onChange={(event)=>context.setSearchByTitle(event.target.value) } />

      <div className="grid gap-2 grid-cols-4 w-full max-w-screen-lg">

      {renderView()}
      </div>
        <ProductDetail/>
    </Layout>
    
  )
}

export default Home

import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Cart from "../../Components/Cart"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const [items, setItems] = useState(null)
  const URL ='https://api.escuelajs.co/api/v1/products'
  useEffect(() => {
    fetch(URL)
    .then(response =>response.json())
    .then(data=> setItems(data))
    
   
    
  }, [])


  return (
    <Layout>
      Home 
      <div className="grid gap-2 grid-cols-4 w-full max-w-screen-lg">

      {
        items?.map(item=>(
          <Cart key ={item.id} item={item}/>
          
          )
          )
        }
      </div>
        <ProductDetail/>
    </Layout>
    
  )
}

export default Home

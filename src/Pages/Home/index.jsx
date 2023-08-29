import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const [items, setItems] = useState(null)
  const URL ='https://api.escuelajs.co/api/v1/products'
  useEffect(() => {
    
    
  }, [])
  

  return (
    <Layout>
      Home 
      
        <ProductDetail/>
    </Layout>
    
  )
}

export default Home

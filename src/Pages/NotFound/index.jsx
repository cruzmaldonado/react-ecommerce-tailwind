import Layout from "../../Components/Layout"

function NotFound() {
 

    return (
      <Layout> 
     <div className='flex flex-col justify-center items-center'>
        estas en 404
        <h1 className='text-white  text-3xl text-center'>Esta pagina no existe</h1>
        <img src="https://midu.dev/images/this-is-fine-404.gif" alt="Pagina no existe" />
    </div>
      </Layout>   
    )
  }
  
  export default NotFound

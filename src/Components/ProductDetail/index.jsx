import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './style.css'

//! aca se creo un interesante error al inicializar produtToShow como {} me arroja un error al cargar productToShow.images[*]
//! No me arrojaba el valor colocando produtToShow ,esto se resuelve de 2 maneras 1) inicializar el estado con todas las
//! caracteristicas de la cart como imges:[]... o haciendo un rendericado condicional en toda las cararteristicas
//! productToShow.images ? context.productToShow.images[0]: ''

const ProductDetail =()=>{
    const context = useContext(ShoppingCartContext)

    
    return(
        <aside
         className={`${context.isProductDetailOpen? 'flex' :'hidden'} product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`} >
            <div className='flex justify-between items-center px-3 pt-2 mb-2'>
                <h2 className='font-medium text-xl'>Detail:</h2>
                <div>
                    <XMarkIcon onClick={()=>context.closeProductDetail()} className="h-6 w-6 text-black cursor-pointer" />

                </div>
            </div>
            <figure className='px-2'>
                <img  
                className="w-full h-full rounded-lg"
                src={context.productToShow.images[0]} 
                alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-1'>{context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>

          
        </aside>
    )
}
export default ProductDetail






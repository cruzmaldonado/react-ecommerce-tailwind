import { XMarkIcon } from '@heroicons/react/24/solid'
import './style.css'

const ProductDetail =()=>{
    return(
        <aside className="product-detail flex flex-col fixed bg-white right-0 border border-black rounded-lg">
            <div className='flex justify-between items-center px-3 pt-2'>
                <h2 className='font-medium text-xl'>Detail:</h2>
                <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
            </div>
        </aside>
    )
}
export default ProductDetail
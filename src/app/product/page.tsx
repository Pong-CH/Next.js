
import AlphabetDisplayComponent from '@/components/AlphabetDisplayComponent'
import ProductCardComponent from '@/components/ProductCardComponent'
import { products } from '@/libs/product'

export default function ProductPage() {
  return (
     <div className="flex flex-wrap gap-5">
      {products.map(({title, image, description, price})=> (
        <ProductCardComponent key={title} title={title} description={description} price={price} image={image}        
        />
      ))}
      <AlphabetDisplayComponent/>
    </div>
  )
}

import './categoryPreview.styles.scss'
import ProductCard from '../product-card/productCard.component'
import { Link } from "react-router-dom";


function CategoryPreview({title,products}) {
  return (
    <div className='category-preview-container'>
        <h2><Link to={title} className='title'>{title.toUpperCase()}</Link></h2>
      <div className='preview'>
        {
            products.filter((_,index)=>index<4).map(product =><ProductCard key={product.id} product={product}/>)
        }
      </div>
    </div>
  )
}

export default CategoryPreview

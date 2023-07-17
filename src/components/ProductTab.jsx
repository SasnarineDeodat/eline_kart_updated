import full_star from '../assets/full_star.svg'
import half_star from '../assets/half_star.svg'
import empty_star from '../assets/empty_star.svg'
import { BASE_URL } from '../constants'

const ProductTab = ({ product }) => {

  const { 
    name, 
    image, 
    rating, 
    numReviews, 
    price 
  } = product

  const stars = [];
  
    const fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img src={full_star} alt="full star" />);
    }
  
    const halfStar = (rating % 1) !== 0;
    if (halfStar) {
      stars.push(<img src={half_star} alt="half star" />);
    }
    
    const emptyStars = 5 - stars.length;  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img src={empty_star} alt="empty star" />);
    }
  
  
  return (
    <div className="product_tab">
      <img className="product_img" src={`${BASE_URL}${image}`} alt={name} />
      <div className='product_tab_flex'>
        <h3 className="product_title">{name}</h3>
        <button className='add_to_cart_btn'>+</button>
      </div>
      <div className='star_rating'>
        {stars} <p>{numReviews}</p>
      </div>
      <h3 className="product_price">{price}</h3>
    </div>
  )
}
export default ProductTab
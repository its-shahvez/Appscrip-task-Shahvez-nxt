import { useState } from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={styles.card}>
      {/* Fancy 'NEW' Badge */}
      <span className={styles.newBadge}>New Season</span>

      {/* Product Image */}
      <div className={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.title} 
          className={styles.productImage} 
        />
      </div>

      {/* Product Details */}
      <div className={styles.details}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>
          Sign in or Create an account to see pricing
        </p>
        
        {/* Price & Heart Icon */}
        <div className={styles.priceRow}>
          {/* Main Price (Randomly striking off older price for effect) */}
          <div>
            <span className={styles.price}>${product.price}</span>
            <span style={{textDecoration:'line-through', color:'#aaa', fontSize:'12px', marginLeft:'8px'}}>
              ${(product.price * 1.2).toFixed(2)}
            </span>
          </div>
          
          <span 
            className={styles.heartIcon} 
            onClick={() => setLiked(!liked)}
            style={{ color: liked ? '#ff4b2b' : '#ccc' }} // Red if liked
          >
            {liked ? '❤️' : '🤍'}
          </span>
        </div>
      </div>
    </div>
  );
}
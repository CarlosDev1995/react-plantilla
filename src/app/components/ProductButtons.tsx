import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ItemContext } from './ProductCard';

export interface PropsButtons{
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style}:PropsButtons) => {

  const { increaseBy, counter } = useContext( ItemContext );

  return (
    <div className={`${styles.buttonsCard} ${className}`} >
        <button 
          onClick={() => increaseBy(-1)}
          className={`${styles.buttonsLike}`}
        >-</button>
          <span className={`${styles.countCard}`} style={style}>{ counter }</span>
        <button 
          className={`${styles.buttonsLike}`}
          onClick={() => increaseBy(1)}

        >+</button>

    </div> 
  )
}

import { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ItemContext } from './ProductCard';

export interface PropsButtons{
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style}:PropsButtons) => {

  const { increaseBy, counter, maxCount} = useContext( ItemContext );

  const isMatchReach = useCallback(
    () => !!maxCount && counter === maxCount ,
    [counter, maxCount],
  )
  

  return (
    <div className={`${styles.buttonsCard} ${className}`} >
        <button 
          onClick={() => increaseBy(-1)}
          className={`${styles.buttonsLike}`}
        >-</button>
          <span className={`${styles.countCard}`} style={style}>{ counter }</span>
        <button 
          className={`${styles.buttonsLike} ${ isMatchReach() && styles.disabled }`}
          onClick={() => increaseBy(1)}
          disabled={isMatchReach() && true}
        >+</button>

    </div> 
  )
}

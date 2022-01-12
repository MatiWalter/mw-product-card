import React from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: React.CSSProperties 
}

export const ProductButtons = ({ className, style }: Props) => {
  
  const { counter, increaseBy, maxCount } = React.useContext(ProductContext);

  const isMaxReached = React.useCallback(() => {
    return !!maxCount && counter === maxCount;
  }, [counter, maxCount]);
  
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}> - </button>
      <div className={styles.countLabel}> {counter} </div>
      <button 
        className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled }`}
        disabled={isMaxReached()} 
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  )
}
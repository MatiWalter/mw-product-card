import React from 'react';
import { useProduct } from '../hooks/useProduct';
import { 
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = React.createContext<ProductContextProps>({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  className?: string;
  initialValues?: InitialValues;
  product: Product;
  style?: React.CSSProperties;
  value?: number;
  children: ( args: ProductCardHandlers ) => JSX.Element;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({ 
  children,
  className,
  initialValues,
  onChange,
  product,
  style,
  value
}: Props) => {

  const { 
    counter,
    isMaxCountReached,
    maxCount,
    increaseBy,
    reset
  } = useProduct({ initialValues, onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        { 
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          })
        }
      </div>
    </Provider>
  )
}

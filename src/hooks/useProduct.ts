import React from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces';

interface useProductArgs {
  initialValues?: InitialValues;
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ 
  initialValues,
  product,
  onChange,
  value = 0 
}: useProductArgs) => {

  const [counter, setCounter] = React.useState<number>(initialValues?.count || value);
  const isMounted = React.useRef(false);

  const increaseBy = ( value: number ) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min( newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product});
  }

  const reset = () => {
    setCounter(initialValues?.count || value);
  }
  
  React.useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);
  
  React.useEffect(() => {
    isMounted.current = true
  }, []);

  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  }
}
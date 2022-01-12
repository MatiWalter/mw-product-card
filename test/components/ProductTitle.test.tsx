import React from 'react'
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should render component with custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className='custom-class' />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should render default title if no prop is passed', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard> 
    );

    expect(wrapper).toMatchSnapshot();
  });
});

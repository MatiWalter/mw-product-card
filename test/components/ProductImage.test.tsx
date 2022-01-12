import React from 'react'
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should render component with custom title', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://hola.jpg" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should render default title if no prop is passed', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {
          () => (
            <ProductImage img={product2.img} />
          )
        }
      </ProductCard> 
    );

    expect(wrapper).toMatchSnapshot();
  });
});

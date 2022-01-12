# Matias Walter

## Ejemplo

```tsx
  import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons
  } from 'mw-product-card';
```

```tsx
  <ProductCard 
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10
    }}
  >
    {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )}
  </ProductCard>
```

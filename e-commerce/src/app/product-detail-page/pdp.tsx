import React from 'react';
import { useRouter } from 'next/router';

function PDP() {
  const router = useRouter();
  const { productId } = router.query;

  return <div>Product Detail Page for Product ID: {productId}</div>;
}

export default PDP;
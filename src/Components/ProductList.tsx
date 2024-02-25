import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    setProducts(["Clo", "House"]);
  }, []);
  return <div>ProductList</div>;
};

export default ProductList;

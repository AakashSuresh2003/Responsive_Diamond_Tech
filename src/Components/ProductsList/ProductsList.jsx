import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProductsList.css';

const ProductList = () => {
  const { categoryId, subcategoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4001/api/v1/categories/${categoryId}/subcategories/${subcategoryId}/products`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, subcategoryId]);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-list-container">
      <h1>Products</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={`http://localhost:4001${product.productImage}`}
                alt={product.productName}
                className="product-image"
              />
              <h4>{product.productName}</h4>
              <button className="button view-product-details">View Details</button>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;

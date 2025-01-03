import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './CategoriesComponent.css';

const SubcategoryList = () => {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubcategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:4001/api/v1/categories/${categoryId}/subcategories`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch subcategories");
        }

        const data = await response.json();

        setSubcategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategories();
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="subcategory-container">
      <div className="subcategory-list">
        {subcategories.length > 0 ? (
          subcategories.map((subcategory) => (
            <div key={subcategory._id} className="subcategory-card">
              <img
                src={`http://localhost:4001${subcategory.subCategoryImage}`}
                alt={subcategory.subCategoryName}
                className="subcategory-image"
              />
              <h4>{subcategory.subCategoryName}</h4>
              <div className="buttons-container">
                <button className="button view-details">View Details</button>
                <button className="button watch-video">Watch Video</button>
              </div>
            </div>
          ))
        ) : (
          <div>No subcategories found</div>
        )}
      </div>
    </div>
  );
};

export default SubcategoryList;

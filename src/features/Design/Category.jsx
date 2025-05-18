import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoryService } from "../../services/categoryService";

const CategoryComponent = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await categoryService.getAllCategories();
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    // Find the clicked category by ID
    const clickedCategory = categories.find(
      (category) => category._id === categoryId
    );

    // Save the category to localStorage
    if (clickedCategory) {
      localStorage.setItem("selectedCategory", JSON.stringify(clickedCategory));
    }

    // Navigate to the respective design route
    navigate(`/design/${categoryId}`);
  };

  const renderSkeleton = () => {
    return Array(6)
      .fill(null)
      .map((_, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex gap-5 items-center py-4">
            {/* Skeleton Image */}
            <div className="w-48 h-48 bg-gray-300 rounded-lg" />
            {/* Skeleton Title */}
            <div className="w-32 h-6 bg-gray-300 rounded" />
          </div>
          {/* Horizontal Line */}
          {index < 5 && <hr className="border-t border-gray-300 my-4" />}
        </div>
      ));
  };

  if (loading) {
    return (
      <div className="container mx-auto flex flex-col gap-6 p-6">
        {renderSkeleton()}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">Error loading categories: {error}</p>;
  }

  if (!categories.length) {
    return <p className="text-center">No categories found.</p>;
  }

  return (
    <div className="container mx-auto flex flex-col p-6">
      {categories.map((category, index) => (
        <div key={category.id} className="flex flex-col">
          <div className="flex gap-5 items-center py-4">
            {/* Image */}
            <div
              onClick={() => handleCategoryClick(category._id)}
              className="cursor-pointer transition-transform transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-48 h-48 object-cover border-4 border-secondary hover:border-primary transition-all duration-300 rounded-lg"
              />
            </div>
            {/* Title */}
            <div
              onClick={() => handleCategoryClick(category._id)}
              className="cursor-pointer transition-transform transform hover:scale-105 text-right"
            >
              <h2 className="text-lg font-bold text-primary">
                {category.name}
              </h2>
            </div>
          </div>
          {/* Horizontal Line */}
          {index < categories.length - 1 && (
            <hr className="border-t border-gray-300 my-4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryComponent;

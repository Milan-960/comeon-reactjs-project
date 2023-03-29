import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategorySelect }) => {
  // category click
  const handleCategoryClick = (categoryId) => {
    onCategorySelect(categoryId);
  };

  return (
    <>
      {categories.map((category) => (
        <div
          key={category.id}
          className={`category item ${
            selectedCategory === category.id ? "selected" : ""
          }`}
          onClick={() => handleCategoryClick(category.id)}
        >
          <div className="content">{category.name}</div>
        </div>
      ))}
    </>
  );
};

export default CategoryFilter;

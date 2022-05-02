const Category = ({ categories, onAdd }) => {
  return categories.map((category) => {
    return (
      <button
        category={category}
        onClick={() => onAdd(category.name)}
        className="category-btn"
      >
        {category.name}
      </button>
    );
  });
};

export default Category;

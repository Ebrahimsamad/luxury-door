import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "single-door",
    name: "أبواب مفردة ",
    image: "/single-door.png",
  },
  {
    id: "single-door-plus",
    name: "أبواب مفردة بلاس",
    image: "/single-door-plus.png",
  },
  {
    id: "double-door",
    name: "أبواب مزدوجة",
    image: "/double-door.png",
  },
  {
    id: "sliding-door",
    name: "أبواب سحاب",
    image: "/door-sahab.png",
  },
  { id: "wall-frame", name: "بروز الحائط", image: "/entrance.png" },
];

const CategoryComponent = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/design/${categoryId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 text-primary">
      {categories.map((category, index) => (
        <div
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-48 h-48 object-cover mb-4 border-4 border-secondary hover:border-primary transition-all 0.4s rounded-lg"
          />
          <h2 className="text-lg font-bold">{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryComponent;

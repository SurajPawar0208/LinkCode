
const categories = [
  {
    name: "Tops",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/852754ee-6ff6-5eac-a3d6-7456a41b91f3/76ead9f2-3f21-555f-b18f-48789f5e4c61.jpg",
    color: "pink",
  },
  {
    name: "Bottoms",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/e4b9836e-ff8a-558f-b129-476eadcb825c/8df5462f-980f-5b85-a85a-31cf23d3ad9a.jpg",
    color: "green",
  },
  {
    name: "Footwear",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/c6e11258-1b01-5d4c-a89b-66ecd847c429/a5ba25bd-a056-5349-8481-97adf23c61e4.jpg",
    color: "blue",
  },
  {
    name: "Accessories",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/9cdaf403-0ae0-5c70-b416-49fe8d6222b9/4ebcf312-d2f8-50b1-ab19-6df49d3b2a8e.jpg",
    color: "yellow",
  },
];

const neonColorClass = (color) => {
  switch (color) {
    case "pink":
      return "border-neon-pink text-white";
    case "green":
      return "border-neon-green text-white";
    case "blue":
      return "border-neon-blue text-white";
    case "yellow":
      return "border-neon-yellow text-white";
    default:
      return "border-white text-white";
  }
};

const CategoryGrid = () => (
  <section className="py-10 bg-black">
    <h2 className="text-2xl md:text-4xl font-genz text-center text-white mb-8">Shop by Category</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className={`rounded-2xl overflow-hidden shadow-xl border-4 cursor-pointer group transition-all duration-300 hover:scale-105 ${neonColorClass(cat.color)}`}
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-36 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`text-center py-3 text-xl font-bold bg-zinc-900 ${neonColorClass(cat.color)}`}>{cat.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default CategoryGrid;

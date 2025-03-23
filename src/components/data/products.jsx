const productNames = [
  "Remera Oversize",
  "Jeans Skinny",
  "Buzo Hoodie",
  "Zapatillas Urbanas",
  "Campera de Cuero",
  "Remera Básica",
  "Pantalón Cargo",
  "Buzo Canguro",
  "Zapatillas Running",
  "Campera Impermeable",
  "Jogger Deportivo",
  "Sweater de Lana",
  "Gorra Street",
  "Mochila Casual",
  "Bufanda de Lana",
  "Reloj Deportivo",
  "Medias Deportivas",
  "Cinturón de Cuero",
  "Guantes de Invierno",
  "Lentes de Sol",
  "Remera Estampada",
  "Short Deportivo",
  "Buzo Con Capucha",
  "Zapatillas Casual",
  "Chaleco Acolchado",
];

const getCategory = (name) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("remera")) return "remeras";
  if (
    lowerName.includes("jeans") ||
    lowerName.includes("pantalón") ||
    lowerName.includes("short")
  )
    return "pantalones";
  if (lowerName.includes("buzo") || lowerName.includes("sweater"))
    return "buzos";
  if (lowerName.includes("zapatillas")) return "calzado";
  if (lowerName.includes("campera") || lowerName.includes("chaleco"))
    return "camperas";
  return "accesorios";
};

const products = productNames.map((name, index) => {
  const id = index + 1;
  return {
    id,
    name,
    price: Math.floor(Math.random() * 100) + 10,
    stock: Math.floor(Math.random() * 20) + 1,
    description: `Descripción de ${name}`,
    category: getCategory(name),
    image: `https://dummyimage.com/300x300/cccccc/000000&text=Producto+${id}`,

    link: `/producto/${id}`,
  };
});

export default products;

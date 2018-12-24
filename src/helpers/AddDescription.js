export function addDescription(product) {
  const description = ['Великолепный', 'Чудный', 'Замечательный', 'Лучший'];
  const randDescription = description[Math.floor(Math.random() * description.length)];
  product['description'] = `${randDescription} ${product.title}`;
  return product;
};

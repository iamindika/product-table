const findProduct = (products, item) => {
  const results = products.filter(product => (
    product.name.toLowerCase().includes(item.toLowerCase())
  ));

  return results;
}

module.exports = {
  findProduct
}
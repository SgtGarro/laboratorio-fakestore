const API = 'https://api.escuelajs.co/api/v1/products'

export const model = {
  products: [],
  newProducts: [],
  limit: 10,
  offset: 0,
}

export const getProducts = async () => {
  const response = await fetch(
    `${API}?limit=${model.limit}&offset=${model.offset}`
  )
  const products = await response.json()
  model.newProducts = products
  model.products.push(...model.newProducts)

  model.offset += model.limit
}

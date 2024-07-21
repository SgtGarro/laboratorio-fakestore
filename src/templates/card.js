import { toMoney } from '../utils/currency.js'

export const cardTemplate = function (product) {
  return `
    <article class="Card">
      <img src="${product.images[0]}" />
      <h2>
        ${product.title}
        <small>${toMoney(product.price)}</small>
      </h2>
    </article>
  `
}

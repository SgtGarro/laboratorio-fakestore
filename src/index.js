import { getProducts, model } from './model/index'
import { cardTemplate } from './templates/card.js'

const $app = document.getElementById('app')
const $observe = document.getElementById('observe')

const renderProducts = async () => {
  try {
    await getProducts()
    if (!model.newProducts.length) return

    const output = model.newProducts.map(cardTemplate).join('')

    const itemsContainer = document.querySelector('.Items')

    if (!itemsContainer) {
      const newItem = document.createElement('section')
      newItem.classList.add('Items')
      newItem.innerHTML = output
      $app.appendChild(newItem)
    } else {
      itemsContainer.insertAdjacentHTML('beforeend', output)
    }
  } catch (error) {
    console.error(error)
  }
}

const intersectionObserver = new IntersectionObserver(
  (entries) => {
    const [entry] = entries

    if (entry.isIntersecting) renderProducts()
  },
  {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
  }
)

intersectionObserver.observe($observe)

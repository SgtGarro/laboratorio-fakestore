export const currency = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency',
})

export const toMoney = function (value) {
  return currency.format(value)
}

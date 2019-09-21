function selectSaleItems(items) {
  return items.filter(function checkDiscounts(items) {
    return items.discount > 0
  })
}

module.exports = selectSaleItems

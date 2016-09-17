function createBookShop (inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle: function (title) {
      return this.inventory.find(book => book.title === title).price
    }
  }
}

const inventory = [
  {title: 'HP', price: 10},
  {title: 'Eloquent JS', price: 20}
]

const bookShop = createBookShop(inventory)

bookShop.inventoryValue()
bookShop.priceForTitle('HP')

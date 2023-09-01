//?Este va a hacer una funcion que sume el total de los productos que existan ,sean estos proveniente de cualquier parte de la app
/**
 * this function calculates total price of a new order 
 * @param {Array} products cartProduct :array of object
 * @returns {number} sum que es el precio total
 */ 
export const totalPrice = (products) => {
  let sum = 0
  products.forEach(product => sum += product.price)
  return sum
}

    
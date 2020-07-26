//  https://www.codewars.com/kata/587593285448632b8d000143

const submitOrder = async id => {  
    const cart = await OrderAPI.getShoppingCartAsync(id);  
    const { zipCode } = await CustomerAPI.getProfileAsync(id);
    const shipping = calculateShipping(cart, zipCode); 
    const succ = await OrderAPI.placeOrderAsync(cart, shipping);  
  }
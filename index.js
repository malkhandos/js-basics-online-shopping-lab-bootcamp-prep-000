var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart=c;
  return cart;
}

function addToCart(item) {
  var itemName = {};
  itemName.item=item;
  itemName.price=Math.floor(Math.random()*101);
  cart.push(itemName);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var newCart=[];
  if (cart.length===0){
    return 'Your shopping cart is empty.'
  }else if (cart.length===1) 
  {for (var i = 0;i<cart.length;i++){
  newCart.push(`${cart[i].item} at $${cart[i].price}`)
  }return `In your cart, you have ${newCart}.`
}else if (cart.length===2){
  for (let i=0;i<cart.length;i++){
  newCart.push(`${cart[i].item} at $${cart[i].price}`)  
  }return `In your cart, you have ${newCart.join(', and ')}.`
}else if (cart.length>2){
  for (let i = 0;i<cart.length;i++){
  newCart.push(`${cart[i].item} at $${cart[i].price}`)  
  }return 'In your cart, you have '+newCart.slice(0,-1).join(', ') +', and ' + newCart.slice(-1)+'.';
  }
}

function total() {
var current=[];
for (let i=0;i<cart.length;i++){
  current.push(cart[i].price)}
  var totals = current.reduce(( x, y ) => x + y, 0);
  return totals
}

function removeFromCart(item) {
for (let i=cart.length-1;i>=0; --i) {
    if (cart[i].item===item) {
        cart.splice(i,1);
    return cart;
}else
return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined){
    return "Sorry, we don't have a credit card on file for you."
}else

console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
cart.length=0;
  return;
}


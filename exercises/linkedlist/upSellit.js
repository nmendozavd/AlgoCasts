
/*
Directions

What does the user have in their cart? *
We often need to detect the contents of a user's cart. 
Write a function that scrapes the items in your cart on the checkout page 
and returns an array with one object per product, sorted by most to least expensive. 
Each object should have 4 properties: image, name, price, quantity.

How can you apply a coupon? *
On the checkout page, write a function that applies the coupon "10OFF". 
Display a message to the user that says "Your coupon was applied!", 
with styling that matches the site.

What happens when a user clicks "Add to Cart"? *
Please describe what happens between the user clicking the "add to cart" button and the mini-cart displaying. 
Use this as an opportunity to show your communication skills, and be as descriptive as you can (in 1000 characters) 
to show your knowledge of the browser and JavaScript.

When the "add to cart" button is clicked, the div "CartDrawer" transitions into adding the attribute tabindex. The JavaScript code may look like this: document.getElementById("CartDrawer").tabIndex = -1. Tabindex is set to -1, which means that the element is not
reachable through keyboard navigation, but now the offscreen content can appear. In this case, it's our right drawer which has our cart information. In addition, 
it probably also has a script that calls the focus() method, that allows the browser to focus any element with a negative tabindex. Finally, tabindex also has browser compatibility with  
all major browser and mobile phone browsers, which makes it a reliable attribute

*/

/*
I decided to create a linked list, which I believed best represented a user's cart. In addition, I created 4 methods: 
1) insertFirst() method inserts items into the cart so we can later retrieve them.
2) getItems(): returns all the items in the cart as an array with one object per product, sorted, and with 4 properties: image, name, price, and quantitiy.
3) total(): calculates the total price of all the items in the cart so we can apply coupons.
4) applyCoupon(): if the correct coupon is applied, 10% is discounted from the total price of items. This method calls on total(). 
*/


class Cart {
  constructor(item) {
    this.head = null;
    this.insertFirst(item);
  }

  // function to add items into cart
  insertFirst(item) {
    const newNode = { item };
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  // function that returns an array with one object per product
  getItems() {
    // point to head
    let current = this.head;
    // create arr from tems
    let cart = [];
    // iterate through list
    while (current !== null) {
      // create object, and push items to arr
      cart.push({
        name: current.item.name,
        image: current.item.image,
        price: current.item.price,
        quantity: current.item.quantity
      })
      // contine to iterate through list until null
      current = current.next;
    }

    // sort in descending order based on price  
    function compare(a, b) {
      return b.price - a.price;
    }
    // call sort on cart  
    cart.sort(compare);
    // return cart 
    return cart;
  }

  total() {
    // create counter 
    let price = 0
    let current = this.head
    // run unitl end of linked list 
    while (current !== null) {
      // increment price
      price += current.item.price
      // move onto next by assigning 'node' to next node
      current = current.next
    }
    return price;
  }

  applyCoupon (code) {
    if (code === '10OFF') {
      let price = this.total() - (this.total() * .10);
      return price;
    }
  }

}

const list = new Cart({ name: 'Boots', image: 'boots_image.url', price: 12, quantity: 3 })
  .insertFirst({ name: 'Glasses', image: 'glasses_image.url', price: 13, quantity: 1 })
  .insertFirst({ name: 'Hat', image: 'hat_image.url', price: 25, quantity: 2 })
  .getItems()
  //.applyCoupon('10OFF');

console.log(JSON.stringify(list));





/*
Directions

What does the user have in their cart? *
We often need to detect the contents of a user's cart. 
Write a function that scrapes the items in your cart on the checkout page 
and returns an array with one object per product, sorted by most to least expensive. 
Each object should have 4 properties: image, name, price, quantity.



*/

// created Linkedlist 
// class Cart {
//   constructor(item) {
//     this.head = null;
//     this.insertFirst(item);
//   }

//   // function to add items into cart
//   insertFirst(item) {
//     const newNode = { item }; 
//     newNode.next = this.head;  
//     this.head = newNode;       
//     return this;
//   }

//   // function that returns an array with one object per product
//   getItems() {
//     // point to head
//     let current = this.head;
//     // create arr from tems
//     let cart = [];
//     // iterate through list
//     while (current !== null) {
//       // create object, and push items to arr
//       cart.push( {
//         name: current.item.name,
//         image: current.item.image,
//         price: current.item.price,
//         quantity: current.item.quantity
//       })
//       // contine to iterate through list until null
//       current = current.next;
//     }
    
//     // sort in descending order based on price  
//     function compare(a, b) {
//       return b.price - a.price;
//     }
//     // call sort on cart  
//     cart.sort(compare);
//     // return cart 
//     return cart;
//   }


// }

// const list = new Cart( {name: 'Boots', image: 'boots_image.url', price: 12, quantity: 3} )
//   .insertFirst( {name: 'Glasses', image: 'glasses_image.url', price: 13, quantity: 1} )
//   .insertFirst({ name: 'Hat', image: 'hat_image.url', price: 25, quantity: 2 } )
//   .getItems();

// console.log(JSON.stringify(list));


/*

How can you apply a coupon? *
On the checkout page, write a function that applies the coupon "10OFF". 
Display a message to the user that says "Your coupon was applied!", 
with styling that matches the site.

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
  //.getItems()
  .applyCoupon('10OFF');

console.log(JSON.stringify(list));




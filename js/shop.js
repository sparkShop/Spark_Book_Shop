/* eslint-disable quotes */
'use strict';

// create new cart instance and add books to it

// eslint-disable-next-line no-undef

let newcart;



newcart = new Cart(JSON.parse(localStorage.getItem("newcart")) || []);


const Container = document.getElementById('addToCartButtons');
Container.addEventListener('click', clickHandler);
function clickHandler(event) {

  event.preventDefault();
  // eslint-disable-next-line no-undef

  for (let i = 0; i < Book.allBooks.length; i++) {
    // eslint-disable-next-line no-undef
    if (event.target.id === Book.allBooks[i].uniqueID) {
      console.log(1);
      let t = true;
      for (let j = 0; j < newcart.allbooksAdded.length; j++) {
        
        if (newcart.allbooksAdded[j].bookadded.uniqueID === event.target.id) {
          
          t = false;
        }
      }
      if (t=== true) {
        newcart.addBooksToCart(Book.allBooks[i]);

      }
      // eslint-disable-next-line no-undef
      cartC();
      break;
    }

  }
  newcart.saveBooksLocalStorage();
}
function cartC() {
  let num = document.getElementById('cartNo');
  num.textContent = newcart.allbooksAdded.length;
}
if (newcart.allbooksAdded.length) {
  cartC();
}

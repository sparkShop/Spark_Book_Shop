/* eslint-disable quotes */
'use strict';

// create new cart instance and add books to it

// eslint-disable-next-line no-undef
let newcart = new Cart([]);

const Container = document.getElementById('addToCartButtons');
Container.addEventListener('click', clickHandler);
function clickHandler(event) {
  event.preventDefault();
  // eslint-disable-next-line no-undef
  for (let i = 0; i < Book.allBooks.length; i++) {
    // eslint-disable-next-line no-undef
    if (event.target.id === Book.allBooks[i].uniqueID) {
      // eslint-disable-next-line no-undef
      newcart.addBooksToCart(Book.allBooks[i]);
      cartC();
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

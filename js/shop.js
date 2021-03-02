/* eslint-disable quotes */
'use strict';

// create new cart instance and add books to it

let newcart = new Cart([]);

const Container = document.getElementById('addToCartButtons');
Container.addEventListener('click', clickHandler);
function clickHandler(event) {
  event.preventDefault();
  for (let i = 0; i < Book.allBooks.length; i++) {
    if (event.target.id === Book.allBooks[i].uniqueID) {
      newcart.addBooksToCart(Book.allBooks[i]);
      cartC();
    }
  }
  newcart.saveBooksLocalStorage();
}
function cartC() {
  let num=document.getElementById("cartNo");
  num.textContent=newcart.allbooksAdded.length;
}
if (newcart.allbooksAdded.length) {
  
  cartC();
}



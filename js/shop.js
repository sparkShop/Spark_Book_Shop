/* eslint-disable quotes */
'use strict';

// create new cart instance and add books to it

// eslint-disable-next-line no-undef
// let newcart = new Cart([]);

// const Container = document.getElementById('addToCartButtons');
// Container.addEventListener('click', clickHandler);
// function clickHandler(event) {
//   event.preventDefault();
//   // eslint-disable-next-line no-undef
//   for (let i = 0; i < Book.allBooks.length; i++) {
//     // eslint-disable-next-line no-undef
//     if (event.target.id === Book.allBooks[i].uniqueID) {
//       // eslint-disable-next-line no-undef
//       newcart.addBooksToCart(Book.allBooks[i]);
//       cartC();
//     }
//   }
//   newcart.saveBooksLocalStorage();
// }

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

const uniqueIDArr2 = [
  'bt_0',
  'bt_1',
  'bt_2',
  'bt_3',
  'bt_4',
  'bt_5',
  'bt_6',
  'bt_7',
  'bt_8',
  'bt_9',
  'bt_10',
  'bt_11',
  'bt_12',
  'bt_13',
  'bt_14',
  'bt_15',
  'bt_16',
  'bt_17',
  'bt_18',
  'bt_19',
  'bt_20',
  'bt_21',
  'bt_22',
  'bt_23',
  'bt_24',
];



Container.addEventListener('click', clickHandler2);
function clickHandler2(event) {
  event.preventDefault();
  for (let i = 0; i < 25; i++) {
    if (event.target.id === uniqueIDArr2[i]) {
      localStorage.setItem('book_index' , i);
      document.location.href = '../details.html';
    }
  }

}

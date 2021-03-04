'use strict';
const table = document.getElementById('table-cart');
let total = 0;
let cart;
let booksFromLS;
function updateLocal() {
  if (localStorage.length > 0) {
    booksFromLS = JSON.parse(localStorage.newcart);
    // eslint-disable-next-line no-undef
    cart = new Cart(booksFromLS);
   
  }
}
function renderCart() {
  for (let i = 0; i < booksFromLS.length; i++) {
    const trEl = document.createElement('tr');
    trEl.setAttribute('id', i);
    table.appendChild(trEl);
    const tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    const imgEl = document.createElement('img');
    tdEl.appendChild(imgEl);
    imgEl.setAttribute('src', booksFromLS[i].bookadded.image);
    const tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = booksFromLS[i].bookadded.bname;
    const tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = booksFromLS[i].bookadded.author;
    const tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = booksFromLS[i].bookadded.rate;
    const tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent = booksFromLS[i].bookadded.price;
    const tdEl5 = document.createElement('td');
    trEl.appendChild(tdEl5);
    const tdEl6 = document.createElement('button');
    tdEl5.appendChild(tdEl6);
    tdEl6.textContent = 'Remove';
    tdEl6.setAttribute('id', booksFromLS[i].bookadded.uniqueID);
    total += parseInt(booksFromLS[i].bookadded.price);
  }
}
let totalCart= document.getElementById('total-cart');

function clearCart() {
  while (table.lastChild) {
    table.removeChild(table.lastChild);
  }
}
table.addEventListener('click', removeHandler);
function removeHandler(event) {
  for (let i = 0; i < booksFromLS.length; i++) {
    if (event.target.id === booksFromLS[i].bookadded.uniqueID) {
      cart.removeItem(i);
    }
    total=0; 
    cart.saveBooksLocalStorage();
    updateLocal();
    clearCart();
    renderCart();
    cartC();
    totalCart.textContent=`Total price ( ${total} )`;
    if(booksFromLS.length ===0){
      let num = document.getElementById('cartNo');
      totalCart.parentNode.removeChild(totalCart);
    }
  }
}
updateLocal();
renderCart();
if(booksFromLS.length){
totalCart.textContent=`Total price ( ${total} )`;
}
function cartC() {
  let num = document.getElementById('cartNo');
  num.textContent =booksFromLS.length;
}
if (booksFromLS.length) {
  cartC();
}

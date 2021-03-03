'use strict';

const table = document.getElementById('table-cart');
let trEl = document.createElement('tr');
table.appendChild(trEl);
let total = 0;
let numOfbook = 0;

let cart;
let booksFromLS;

function updateLocal() {
  if (localStorage.length > 0) {
    booksFromLS = JSON.parse(localStorage.newcart);
    // eslint-disable-next-line no-undef
    cart = new Cart(booksFromLS);
    numOfbook = parseInt(booksFromLS.length);
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
    tdEl1.textContent = booksFromLS[i].bookadded.price;
    const tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = booksFromLS[i].bookadded.bname;
    const tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent = booksFromLS[i].bookadded.rate;
    const tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent = booksFromLS[i].bookadded.author;
    const tdEl5 = document.createElement('button');
    trEl.appendChild(tdEl5);
    tdEl5.textContent = 'X';
    tdEl5.setAttribute('id', booksFromLS[i].bookadded.uniqueID);
    total += parseInt(booksFromLS[i].bookadded.price);
  }
}

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
    cart.saveBooksLocalStorage();
    updateLocal();
    clearCart();
    renderCart();
  }
}

updateLocal();
renderCart();

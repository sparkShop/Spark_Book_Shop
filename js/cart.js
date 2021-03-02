// event.target.id = a
// compare with all ids in books.name[i]
const newarr=['Book image','Book name','Book price','Book rate','Book author'];
let a ;
// let newcart;

// console.log(a[0].bookadded.uniqueID);
const table = document.getElementById('table');
let trEl = document.createElement('tr');
table.appendChild(trEl);


for (let i = 0; i < newarr.length; i++) {

  const thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent=newarr[i];

}
updateLocal();
renderCart();
function updateLocal() {
  if (localStorage.length>0){
    a=JSON.parse(localStorage.newcart);
    // newcart=new Cart(a);

  }
}

function renderCart (){
  for (let i = 0; i < a.length; i++) {
    const trEl = document.createElement('tr');
    trEl.setAttribute('id',i);
    table.appendChild(trEl);
    const tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    const imgEl=document.createElement('img');
    tdEl.appendChild(imgEl);
    imgEl.setAttribute('src',a[i].bookadded.image);
    const tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent=a[i].bookadded.price;
    const tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent=a[i].bookadded.bname;
    const tdEl3 = document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent=a[i].bookadded.rate;
    const tdEl4 = document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent=a[i].bookadded.author;
    const tdEl5 = document.createElement('button');
    trEl.appendChild(tdEl5);
    tdEl5.textContent='X';
    tdEl5.setAttribute('id',a[i].bookadded.uniqueID);
  }}

function clearCart() {
  while (table.lastChild) {
    trEl.lastChild.remove;
  }

}

table.addEventListener('click',removeHandler);
function removeHandler(event) {
  for (let i = 0; i < a.length; i++) {
    if (event.target.id === a[i].bookadded.uniqueID ) {
      // newcart.removeItem(i);
      // newcart.allbooksAdded.splice(i,1);
    }
    a.saveBooksLocalStorage();
    updateLocal();
    clearCart();
    renderCart();
  }
}

// retrieve
// let a=[];
// if (localStorage.length>0){

//   let uniqueID;
//   let image;
//   let bname;
//   let description;
//   let author;
//   let rate;
//   let price;
//   for (let j = 0; index < a.length; j++) {
//     uniqueID=a[i].bookadded.uniqueID;
//     image=a[i].bookadded.image;
//     bname=a[i].bookadded.bname;
//     description=a[i].bookadded.description;
//     author=a[i].bookadded.author;
//     rate=a[i].bookadded.rate;
//     price=a[i].bookadded.price;
//   }
// }



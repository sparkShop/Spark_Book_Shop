'use strict';
 // ----------------Create Related Book element-----------------------
const main_ul =document.getElementById('main_ul');
const tag_name =document.getElementById('tag_name');
const tag_index =localStorage.getItem('tag_index');


const tag_array = tags[tag_index];
tag_name.textContent = tags_name[tag_index];

for(let i = 0 ;i<tag_array.length; i++){
    create_book_element(tag_array[i]);
}


// create Book card element

function create_book_element(i){
    
const book_li = document.createElement('li');
const book_img = document.createElement('img');
const book_span = document.createElement('span');
const a_1 = document.createElement('a');
const a_2 = document.createElement('a');
const button1 = document.createElement('button');
const button2 = document.createElement('button'); 
const head_2 = document.createElement('h3');

// Arrange the elements
main_ul.appendChild(book_li);
book_li.appendChild(book_img);
book_li.appendChild(book_span);
book_li.appendChild(head_2);

book_span.appendChild(a_1);
book_span.appendChild(a_2);
a_1.appendChild(button1);
a_2.appendChild(button2);

// Define element properties
book_img.src = paid_Book[i].image;
head_2.textContent=paid_Book[i].price + ' JD';
button1.textContent='Description';
button2.textContent='Add to Cart';

button1.addEventListener('click',function(){
    localStorage.setItem('book_index' , i);
    document.location.href = './details.html';
})

button2.id="b"+i;
}
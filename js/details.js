'use strict';

// Get element by id
const title_ele=document.getElementById('title');
const author_ele=document.getElementById('author');
const description_ele=document.getElementById('description');
const img_ele = document.getElementById('img_book');
const download_ele = document.getElementById('download_tag');
const read_ele = document.getElementById('read_tag');

const price_text=document.getElementById('price_text');
const cart_span=document.getElementById('cart_span');


// Book index
const book_index=localStorage.getItem('book_index');


    // get selected book data from database
    const name =paid_Book[book_index].name;
    const price =paid_Book[book_index].price;
    const author =paid_Book[book_index].author;
    const description =paid_Book[book_index].description;
    const image =paid_Book[book_index].image;

    // show the book data in the elements
    img_ele.src = image;
    title_ele.textContent = name;
    description_ele.textContent = description;
    author_ele.textContent = author;
    price_text.textContent = price +' $';



// ---------------- select Book Tags --------------------------------

let tag_1 = '';
let tag_2 = '';
let tag_3 = '';
let tag_4 = '';

let tag_index_1 = 0;
let tag_index_2 = 0;
let tag_index_3 = 0;
let tag_index_4 = 0;

let related_book_array =[];


// get tags elements by id 

const tag1_ele = document.getElementById('tag1_ele');
const tag2_ele = document.getElementById('tag2_ele');
const tag3_ele = document.getElementById('tag3_ele');
const tag4_ele = document.getElementById('tag4_ele');

let tags_counter = 0;


for (let i=0;i<tags.length;i++){

    if (tags[i].includes(book_index*1)){
        related_book_array = related_book_array.concat(tags[i]);
        switch(''){
            case tag_1:
                tag_index_1 = i;
                tag_1=tags_name[i];
                tags_counter++;
                break;
            case tag_2:
                tag_index_2 = i;
                tag_2=tags_name[i];
                tags_counter++;
                break;
            case tag_3:
                tag_index_3 = i;
                tag_3=tags_name[i];
                tags_counter++;
                break;
            case tag_4:
                tag_index_4 = i;
                tag_4=tags_name[i];
                tags_counter++;
                break;
        }    
    }

    if(tags_counter==4){
        break;
    }
}


if(tag_1 !=''){
    tag1_ele.textContent=tag_1;
}else{
    tag1_ele.style.display="none";
}

if(tag_2 !=''){
    tag2_ele.textContent=tag_2;
}else{
    tag2_ele.style.display="none";
}

if(tag_3 !=''){
    tag3_ele.textContent=tag_3;
}else{
    tag3_ele.style.display="none";
}

if(tag_4 !=''){
    tag4_ele.textContent=tag_4;
}else{
    tag4_ele.style.display="none";
}


// ---------------- Related Book --------------------------------

// ----------------Get Related Book Index -----------------------
let book1_index =0;
let book2_index =0;
let book3_index =0;
let book4_index =0;

// Book 1
book1_index = getRandomArbitrary(0,(related_book_array.length-1))
book1_index = related_book_array[book1_index];

while(book1_index==book_index){
    book1_index = getRandomArbitrary(0,(related_book_array.length-1))
    book1_index = related_book_array[book1_index];
}

// Book 2
while(book2_index==book_index ||book2_index==book1_index || book2_index ==0){
    book2_index = getRandomArbitrary(0,(related_book_array.length-1))
    book2_index = related_book_array[book2_index];
}

// Book 3
while(book3_index==book_index || book3_index==book1_index || book3_index==book2_index || book3_index ==0){
    book3_index = getRandomArbitrary(0,(related_book_array.length-1))
    book3_index = related_book_array[book3_index];
}

// Book 4
while(book4_index==book_index || book4_index==book1_index || book4_index==book2_index || book4_index==book3_index || book4_index ==0){
    book4_index = getRandomArbitrary(0,(related_book_array.length-1))
    book4_index = related_book_array[book4_index];
}

// ---------------- Book Tags Listener --------------------------------


tag1_ele.addEventListener('click',function(){
    localStorage.setItem('tag_index' , tag_index_1);
    document.location.href = '../tags.html';
});

tag2_ele.addEventListener('click',function(){
    localStorage.setItem('tag_index' , tag_index_2);
    document.location.href = '../tags.html';
});

tag3_ele.addEventListener('click',function(){
    localStorage.setItem('tag_index' , tag_index_3);
    document.location.href = '../tags.html';
});

tag4_ele.addEventListener('click',function(){
    localStorage.setItem('tag_index' , tag_index_4);
    document.location.href = '../tags.html';
});


// ----------------Create Related Book element-----------------------

const main_ul =document.getElementById('related_book_ul');

// create Book card element

function create_book_element(i){
    
const book_li = document.createElement('li');
const book_img = document.createElement('img');
const book_span = document.createElement('span');
const a_1 = document.createElement('a');
const a_2 = document.createElement('a');
const button1 = document.createElement('button');
const button2 = document.createElement('button'); 
const head_1 = document.createElement('h3');
const head_2 = document.createElement('h3');

book_img.className="related_img";

// Arrange the elements
main_ul.appendChild(book_li);
book_li.appendChild(book_img);
book_li.appendChild(book_span);
book_li.appendChild(head_1);
book_li.appendChild(head_2);

book_span.appendChild(a_1);
book_span.appendChild(a_2);
a_1.appendChild(button1);
a_2.appendChild(button2);

// Define element properties
book_img.src = paid_Book[i].image;
head_1.textContent=paid_Book[i].name;
head_2.textContent=paid_Book[i].price + ' JD';
button1.textContent='Description';
button2.textContent='Add to Cart';

button1.addEventListener('click',function(){
    localStorage.setItem('book_index' , i);
    //document.location.href = '../tags.html';
    location.reload();
});
}

create_book_element(book1_index);
create_book_element(book2_index);
create_book_element(book3_index);
create_book_element(book4_index);

// helper function


function getRandomArbitrary(min, max) {
    return Math.round( Math.random() * (max - min) + min );
}
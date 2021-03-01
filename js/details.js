'use strict';

// Get element by id
const title_ele=document.getElementById('title');
const author_ele=document.getElementById('author');
const rate_ele=document.getElementById('img_stars');
const description_ele=document.getElementById('description');
const img_ele = document.getElementById('img_book');
const download_ele = document.getElementById('download_tag');
const read_ele = document.getElementById('read_tag');

const book_category =localStorage.getItem('book_category');


if(book_category=='front_end'){
    const book_index=localStorage.getItem('book_index');
    const name=front_end_books[book_index].name;
    const description=front_end_books[book_index].description;
    const link_book = front_end_books[book_index].link;

    img_ele.src=front_end_books[book_index].image;
    title_ele.textContent=name;
    description_ele.textContent=description;
    read_ele.href=link_book;
    download_ele.href=link_book; 
}

if(book_category=='back_end' ){
    const book_index=localStorage.getItem('book_index');
    const name=back_end_books[book_index].name;
    const description=back_end_books[book_index].description;
    const link_book = back_end_books[book_index].link;

    img_ele.src=back_end_books[book_index].image;
    title_ele.textContent=name;
    description_ele.textContent=description;
    read_ele.href=link_book;
    download_ele.href=link_book; 
}

if(book_category=='paid_book' ){
    const book_index=localStorage.getItem('book_index');
}
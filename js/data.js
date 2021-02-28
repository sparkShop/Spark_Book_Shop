'use strict'

function Book_data (name ,rate ,image ,description ,price ,link ){
    let object ={
        // Book title
        name:name,
        // Image path
        image:image
        // Rate Out of 5
        ,rate:rate
        // Book Description 
        ,description:description
        // Book price , use 0 for free Book
        ,price:price
        // Book Link , Use '' for hard copy book
        ,link:link
    };
    return object;
}


// Book Categories :
const front_end_books = [
    new Book_data('##',5,'/img/1.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('1',3,'/img/2.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('2',4,'/img/3.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('3',2,'/img/4.png','','','/pdf-folder/book1.pdf')
    ,new Book_data('4',5,'/img/5.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('5',1,'/img/6.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('1',5,'/img/2.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('2',5,'/img/3.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('3',3,'/img/4.png','','','/pdf-folder/book1.pdf')
    ,new Book_data('4',2,'/img/5.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('5',4,'/img/6.jpg','','','/pdf-folder/book1.pdf')
];

const back_end_books = [
    new Book_data('back_end_book',5,'/img/1.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('1',3,'/img/2.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('2',4,'/img/3.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('3',2,'/img/4.png','','','/pdf-folder/book1.pdf')
    ,new Book_data('4',5,'/img/5.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('5',1,'/img/6.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('1',5,'/img/2.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('2',5,'/img/3.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('3',3,'/img/4.png','','','/pdf-folder/book1.pdf')
    ,new Book_data('4',2,'/img/5.jpg','','','/pdf-folder/book1.pdf')
    ,new Book_data('5',4,'/img/6.jpg','','','/pdf-folder/book1.pdf')
];



const all_book =[front_end_books,back_end_books];

// To access any book data ,You need to know two parameters
// first category index , for example category index of free books is 0
// second book index
// for example to access fourth book data from economics_books category :
// name --> all_book[2][3].name
// image path --> all_book[2][3].image
// and so on
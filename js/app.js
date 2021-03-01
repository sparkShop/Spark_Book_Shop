'use strict';
// All Data
function Book_data(name, imgPath, image, description, price, link) {
  let object = {
    // Book title
    name: name,
    // Image
    image: image
    // Rate Out of 5
    , imgPath: imgPath
    // Book Description
    , description: description
    // Book price , use 0 for free Book
    , price: price
    // Book Link , Use '' for hard copy book
    , link: link
  };
  return object;
}
// Book Categories :
const front_end_books = [
  new Book_data('front_end_books', 'https://www.google.com', '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
  , new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf')
  , new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf')
  , new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf')
];
const back_end_books = [
  new Book_data('front_end_books', 'https://www.google.com', '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/A Tour of C++.jpg', '', '', '../book1.pdf')

  , new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf')
  , new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf')
  , new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf')
];
// get element by id
const front_end_ul = document.getElementById('front_end_book');
const back_end_ul = document.getElementById('back_end_book');
// front end book
for (let i = 0; i < 5; i++) {
  // create Book card element --> 8 element
  const book_li = document.createElement('li');
  const book_a = document.createElement('a');
  const book_img = document.createElement('img');
  const book_span = document.createElement('span');
  const span_a1 = document.createElement('a');
  const span_a2 = document.createElement('a');
  const span_button1 = document.createElement('button');
  const span_button2 = document.createElement('button');
  // Arrange the elements
  span_a1.appendChild(span_button1);
  span_a2.appendChild(span_button2);
  book_span.appendChild(span_a1);
  book_span.appendChild(span_a2);
  book_a.appendChild(book_img);
  book_li.appendChild(book_a);
  book_li.appendChild(book_span);
  front_end_ul.appendChild(book_li);
  // Define element properties
  book_a.href = front_end_books[i].imgPath;
  book_a.target = '_blank';
  book_img.src = front_end_books[i].image;
  span_button1.textContent = 'Read';
  span_button2.textContent = 'Download';
  span_a1.href = front_end_books[i].link;
  span_a1.target = '_blank';
  span_a2.href = front_end_books[i].link;
  span_a2.download = front_end_books[i].link;
}
// back end book

for (let i = 0; i < 5; i++) {
  // create Book card element --> 8 element
  const book_li = document.createElement('li');
  const book_a = document.createElement('a');
  const book_img = document.createElement('img');
  const book_span = document.createElement('span');
  const span_a1 = document.createElement('a');
  const span_a2 = document.createElement('a');
  const span_button1 = document.createElement('button');
  const span_button2 = document.createElement('button');
  // Arrange the elements
  span_a1.appendChild(span_button1);
  span_a2.appendChild(span_button2);
  book_span.appendChild(span_a1);
  book_span.appendChild(span_a2);
  book_a.appendChild(book_img);
  book_li.appendChild(book_a);
  book_li.appendChild(book_span);
  back_end_ul.appendChild(book_li);
  // Define element properties
  book_img.src = back_end_books[i].image;
  book_a.href = back_end_books[i].imgPath;
  book_a.target = '_blank';
  span_button1.textContent = 'Read';
  span_button2.textContent = 'Download';
  span_a1.href = back_end_books[i].link;
  span_a1.target = '_blank';
  span_a2.href = back_end_books[i].link;
  span_a2.download = back_end_books[i].link;
}
 const Pcar =['./images/Learning Web Design.jpg',
  './images/HTML and CSS QuickStart Guide.jpg',
  './images/Head First HTML and CSS.jpg',
  './images/Learn CSS in One Day and Learn It Well.jpg',
  './images/Responsive Web Design with HTML5 and CSS.jpg',
  './images/JavaScript The Definitive Guide.jpg',
  './images/Eloquent JavaScript.jpg',
  './images/Head First HTML and CSS.jpg',
  './images/Learn JavaScript Quickly.jpg',
  './images/JJavascript for Beginners.jpg',
  './images/HTML5 for Masterminds.jpg',
  './images/HTML5 and CSS3 All-in-One For Dummies.jpg',
  './images/HTML5 Pocket Reference.jpg',
  './images/CSS  The Definitive Guide.jpg',
  './images/Python Crash Course.jpg',
  './images/Hands-On Machine Learning with Scikit-Learn.jpg',
  './images/Python for Everybody.jpg',
  './images/Build Your Own AI Investor.jpg',
  './images/Learn Python Quickly.jpg',
  './images/Head First Design Patternsn.jpg',
  './images/Elements of Programming Interviews in Java.jpg.jpg',
  './images/Starting Out with Java.jpg',
  './images/JavaScript and JQuery.jpg',
  './images/A Tour of C++.jpg',
  './images/C++ in One Hour a Day.jpg',
];

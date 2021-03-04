'use strict';
// Books constructor

const uniqueIDArr = [
  'b0',
  'b1',
  'b2',
  'b3',
  'b4',
  'b5',
  'b6',
  'b7',
  'b8',
  'b9',
  'b10',
  'b11',
  'b12',
  'b13',
  'b14',
  'b15',
  'b16',
  'b17',
  'b18',
  'b19',
  'b20',
  'b21',
  'b22',
  'b23',
  'b24',
];

const bnameArr = [
  'Learning Web Design',
  'HTML and CSS QuickStart Guide',
  'Head First HTML and CSS',
  'CSS (with HTML5)',
  'Responsive Web Design ',
  'JavaScript The Definitive Guide',
  'Eloquent JavaScript',
  'Head First JavaScript Programming',
  'Learn JavaScript Quickly',
  'Javascript for Beginners',
  'HTML5 for Masterminds',
  'HTML5 and CSS3 All-in-One',
  'HTML5 Pocket Reference',
  'CSS: The Definitive Guide',
  'Python Crash Course',
  'Hands-On Machine Learning',
  'Python for Everybody',
  'Build Your Own AI Investor',
  'Learn Python Quickly',
  'Head First Design Patterns',
  'Programming Interviews in Java',
  'Starting Out with Java',
  'JavaScript and JQuery',
  'A Tour of C++',
  'C++ in One Hour a Day',
];

const priceArr = [
  50.99,
  40.99,
  32.17,
  11.67,
  27.99,
  45.49,
  45.49,
  30.6,
  16.89,
  16.89,
  19.55,
  19.55,
  16.89,
  43.91,
  16.89,
  39.0,
  39.0,
  22.0,
  16.25,
  16.25,
  30.0,
  45.47,
  42.25,
  31.99,
  33.47,
];
const authorArr = [
  'Jennifer Robbins',
  'David DuRocher',
  'Elisabeth Robson',
  'LCF Publishing',
  'Ben Frain',
  'David Flanagan',
  'Marijn Haverbeke',
  'Marijn Haverbeke',
  'code quickly',
  'Matthew Python',
  'J.D Gauchat',
  'Andy Harris',
  'Jennifer Robbins',
  'Eric A. Meyer and Estelle Weyl',
  'Jennifer Robbins',
  'Aurélien Géron',
  'Aurélien Géron',
  'Damon Lee Ph.D.',
  'Code Quickly',
  'Eric Freeman  and  Elisabeth Robson',
  'Adnan Aziz',
  'Tony Gaddis',
  'Jon Duckett',
  'Stroustrup Bjarne',
  'Siddhartha Rao',
];
const rateArr = [
  4.5,
  5,
  4.6,
  4.5,
  4.7,
  4.7,
  4.6,
  4.6,
  4.7,
  4,
  4.5,
  4.6,
  4.6,
  4.5,
  4.6,
  4.8,
  4.8,
  4.3,
  4.4,
  4.4,
  4.6,
  4.5,
  4.6,
  4.8,
  4.4,
];

const imageArr = [
  './images/Learning Web Design.jpg',
  './images/HTML and CSS QuickStart Guide.jpg',
  './images/Head First HTML and CSS.jpg',
  './images/Learn CSS in One Day and Learn It Well.jpg',
  './images/Responsive Web Design with HTML5 and CSS.jpg',
  './images/JavaScript The Definitive Guide.jpg',
  './images/Eloquent JavaScript.jpg',
  './images/Head First JavaScript Programming.jpg',
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
  './images/Elements of Programming Interviews in Java.jpg',
  './images/Starting Out with Java.jpg',
  './images/JavaScript and JQuery.jpg',
  './images/A Tour of C++.jpg',
  './images/C++ in One Hour a Day.jpg',
];

const Book = function (uniqueID, image, bname, author, rate, price) {
  this.uniqueID = uniqueID;
  this.bname = bname;
  this.author = author;
  this.rate = rate;
  this.image = image;
  this.price = price;
  Book.allBooks.push(this);
};
Book.allBooks = [];

function createBooks() {
  for (let i = 0; i < uniqueIDArr.length; i++) {
    new Book(
      uniqueIDArr[i],
      imageArr[i],
      bnameArr[i],
      authorArr[i],
      rateArr[i],
      priceArr[i]
    );
  }
}
createBooks();

// added book Constructor

const BookAdded = function (bookadded) {
  this.bookadded = bookadded;
};

// Cart Constructor
const Cart = function (allbooksAdded) {
  this.allbooksAdded = allbooksAdded;
  if (localStorage.length) {
    this.allbooksAdded = JSON.parse(localStorage.getItem('newcart'));
  }
};
//create array that has all added books
Cart.prototype.addBooksToCart = function (bookadded) {
  this.allbooksAdded.push(new BookAdded(bookadded));
};
// add this array to local storage after doing the conversion using JSON stringify method
Cart.prototype.saveBooksLocalStorage = function () {
  localStorage.setItem('newcart', JSON.stringify(this.allbooksAdded));
};
// method that romoves an item from cart when user clicks on the remove button on the cart page
Cart.prototype.removeItem = function (book) {
  this.allbooksAdded.splice(book, 1);
};

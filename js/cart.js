// 'use strict';

// // Books constructor
// const Book = function (image,bname,description,author,rate,price) {
// this.bname= bname;
// this.description = description;
// this.author = author;
// this.rate = rate;
// this.image = image;
// this.price = price;
// Book.allBooks.push(this);
// }
// Book.allBooks = [];


// const bnameArr = ['Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics 5th Edition',
// 'HTML and CSS QuickStart Guide: The Simplified Beginners Guide to Developing a Strong Coding Foundation, Building Responsive Websites,and Mastering the Fundamentals of Modern Web Design',
// 'Head First HTML and CSS: A Learner\'s Guide to Creating Standards-Based Web Pages 2nd Edition','CSS (with HTML5): Learn CSS in One Day and Learn It Well. CSS for Beginners with Hands-on Project. Includes HTML5. (Learn Coding Fast with Hands-On Project Book 2)',
// 'Responsive Web Design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques, 3rd Edition',
// 'JavaScript The Definitive Guide Master the World\'s Most-Used Programming Language', 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming Paperback',
// 'Head First JavaScript Programming: A Brain-Friendly Guide', 'Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project)',
// 'Javascript for Beginners: The Simplified for Absolute Beginner’s Guide to Learn and Understand Computer Programming Coding with Javascript Step by Step. Basics Concepts and Practice Examples Inside',
// 'HTML5 for Masterminds, 3rd Edition: How to take advantage of HTML5 to create responsive websites and revolutionary applications', 'HTML5 and CSS3 All-in-One For Dummies',
// 'HTML5 Pocket Reference: Quick, Comprehensive, Indispensable (Pocket Reference (O\'Reilly))', 'CSS: The Definitive Guide: Visual Presentation for the Web',
// 'Python Crash Course, 2nd Edition A Hands-On, Project-Based Introduction to Programming','Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems',
// 'Python for Everybody: Exploring Data in Python 3 Paperback', 'Build Your Own AI Investor: With Machine Learning and Python, Step by Step', 
// 'Learn Python Quickly: A Complete Beginner’s Guide to Learning Python, Even If You’re New to Programming','Head First Design Patterns: Building Extensible and Maintainable Object-Oriented Software',
// 'Elements of Programming Interviews in Java: The Insiders\' Guide', 'Starting Out with Java', 'JavaScript and JQuery: Interactive Front-End Web Development',
// 'A Tour of C++ (C++ In-Depth Series)', 'C++ in One Hour a Day, Sams Teach Yourself'
// ];

// const priceArr = [50.99, 40.99, 32.17,11.67,27.99,45.49, 45.49, 30.6, 16.89, 16.89, 19.55, 19.55, 16.89, 43.91, 16.89, 39.00, 39.00,22.00, 16.25, 16.25, 30.00, 45.47, 42.25, 31.99, 33.47,];
// const authorArr = ['Jennifer Robbins','David DuRocher','Elisabeth Robson','LCF Publishing','Ben Frain', 'David Flanagan', 'Marijn Haverbeke', 'Marijn Haverbeke', 'code quickly', 
// 'Matthew Python','J.D Gauchat','Andy Harris','Jennifer Robbins', 'Eric A. Meyer and Estelle Weyl', 'Jennifer Robbins', 'Aurélien Géron', 'Aurélien Géron', 'Damon Lee Ph.D.', 'Code Quickly',
// 'Eric Freeman  and  Elisabeth Robson', 'Adnan Aziz', 'Tony Gaddis', 'Jon Duckett', 'Stroustrup Bjarne', 'Siddhartha Rao', 

// ];
// const rateArr = [4.5, 5,4.6,4.5,4.7, 4.7, 4.6, 4.6, 4.7, 4, 4.5, 4.6, 4.6, 4.5, 4.6, 4.8, 4.8, 4.3, 4.4, 4.4, 4.6, 4.5, 4.6, 4.8, 4.4,];

// const descriptionArr = []
// const imageArr =['./images/Learning Web Design.jpg',
//   './images/HTML and CSS QuickStart Guide.jpg',
//   './images/Head First HTML and CSS.jpg',
//   './images/Learn CSS in One Day and Learn It Well.jpg',
//   './images/Responsive Web Design with HTML5 and CSS.jpg',
//   './images/JavaScript The Definitive Guide.jpg',
//   './images/Eloquent JavaScript.jpg',
//   './images/Head First JavaScript Programming.jpg',
//   './images/Learn JavaScript Quickly.jpg',
//   './images/Javascript for Beginners.jpg',
//   './images/HTML5 for Masterminds.jpg',
//   './images/HTML5 and CSS3 All-in-One For Dummies.jpg',
//   './images/HTML5 Pocket Reference.jpg',
//   './images/CSS  The Definitive Guide.jpg',
//   './images/Python Crash Course.jpg',
//   './images/Hands-On Machine Learning with Scikit-Learn.jpg',
//   './images/Python for Everybody.jpg',
//   './images/Build Your Own AI Investor.jpg',
//   './images/Learn Python Quickly.jpg',
//   './images/Head First Design Patterns.jpg',
//   './images/Elements of Programming Interviews in Java.jpg.jpg',
//   './images/Starting Out with Java.jpg',
//   './images/JavaScript and JQuery.jpg',
//   './images/A Tour of C++.jpg',
//   './images/C++ in One Hour a Day.jpg',
// ];


// console.log (bnameArr.length);
// console.log (priceArr.length);
// console.log (authorArr.length);
// console.log (rateArr.length);

// function createBooks (){
//   for (let i = 0; i < Book.allBooks.length; i++) {
//     new Book (imageArr[i],bnameArr[i],descriptionArr[i],authorArr[i],rateArr[i],priceArr[i]);
//   }

// createBooks ();

// // added book Constructor

// const BookAdded = function (bookadded, bookquantity){
// this.bookadded =bookadded;
// this.bookquantity = bookquantity;
// }

// // Cart Constructor
// const Cart = function (allbooksAdded)
// {
//   this.allbooksAdded = allbooksAdded;
// }
// //create array that has all added books
// Cart.prototype.addBooksToCart= function (bookadded, bookquantity){
//   this.allbooksAdded.push(new BookAdded (bookadded, bookquantity))
// }
// // add this array to local storage after doing the conversion using JSON stringify method
// Cart.prototype.saveBooksLocalStorage = function (){
//   localStorage.setItem('cart',JSON.stringify(this.allbooksAdded))
// }
// // method that romoves an item from cart when user clicks on the remove button on the cart page
// Cart.prototype.removeItem = function (book) {
//   this.allbooksAdded.splice(book, 1);
// };


// // Buy Books Page

// const newcart = new Cart([]);
// // add to cart button 
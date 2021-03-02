'use strict';

// All Data
function Book_data(name, rate, image, description, price, link) {
    let object = {
      // Book title
      name: name,
      // Image
      image: image
      // Rate Out of 5
      , rate: rate
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
    new Book_data('front_end_books', 4, '../images/A Tour of C++.jpg', '--------------********', '', '../book1.pdf')
    , new Book_data('front_end_books', 4, '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
    , new Book_data('front_end_books', 4, '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
    , new Book_data('front_end_books', 4, '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
    , new Book_data('front_end_books', 4, '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
    , new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf')
    , new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf')
    , new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf')
  ];
  const back_end_books = [
    new Book_data('front_end_books', 4, '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
    , new Book_data('front_end_books', 4, '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
    , new Book_data('front_end_books', 4, '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
    , new Book_data('front_end_books', 4, '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
    , new Book_data('front_end_books', 4, '../images/A Tour of C++.jpg', '', '', '../book1.pdf')
    , new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf')
    , new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf')
    , new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf')
  ];

  //----------- paid book data --------

  // All Data For Paid book
function paid_Book_data(name, price, author, rate, description,image) {
  let object = {
    name: name,
    price: price,
    author: author,
    rate: rate,
    description: description,
    image: image,
  };
  return object;
}


  const bnameArr = ['Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics 5th Edition',
'HTML and CSS QuickStart Guide: The Simplified Beginners Guide to Developing a Strong Coding Foundation, Building Responsive Websites,and Mastering the Fundamentals of Modern Web Design',
'Head First HTML and CSS: A Learner\'s Guide to Creating Standards-Based Web Pages 2nd Edition','CSS (with HTML5): Learn CSS in One Day and Learn It Well. CSS for Beginners with Hands-on Project. Includes HTML5. (Learn Coding Fast with Hands-On Project Book 2)',
'Responsive Web Design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques, 3rd Edition',
'JavaScript The Definitive Guide Master the World\'s Most-Used Programming Language', 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming Paperback',
'Head First JavaScript Programming: A Brain-Friendly Guide', 'Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project)',
'Javascript for Beginners: The Simplified for Absolute Beginner’s Guide to Learn and Understand Computer Programming Coding with Javascript Step by Step. Basics Concepts and Practice Examples Inside',
'HTML5 for Masterminds, 3rd Edition: How to take advantage of HTML5 to create responsive websites and revolutionary applications', 'HTML5 and CSS3 All-in-One For Dummies',
'HTML5 Pocket Reference: Quick, Comprehensive, Indispensable (Pocket Reference (O\'Reilly))', 'CSS: The Definitive Guide: Visual Presentation for the Web',
'Python Crash Course, 2nd Edition A Hands-On, Project-Based Introduction to Programming','Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems',
'Python for Everybody: Exploring Data in Python 3 Paperback', 'Build Your Own AI Investor: With Machine Learning and Python, Step by Step', 
'Learn Python Quickly: A Complete Beginner’s Guide to Learning Python, Even If You’re New to Programming','Head First Design Patterns: Building Extensible and Maintainable Object-Oriented Software',
'Elements of Programming Interviews in Java: The Insiders\' Guide', 'Starting Out with Java', 'JavaScript and JQuery: Interactive Front-End Web Development',
'A Tour of C++ (C++ In-Depth Series)', 'C++ in One Hour a Day, Sams Teach Yourself'
];

const priceArr = [50.99, 40.99, 32.17,11.67,27.99,45.49, 45.49, 30.6, 16.89, 16.89, 19.55, 19.55, 16.89, 43.91, 16.89, 39.00, 39.00,22.00, 16.25, 16.25, 30.00, 45.47, 42.25, 31.99, 33.47,];
const authorArr = ['Jennifer Robbins','David DuRocher','Elisabeth Robson','LCF Publishing','Ben Frain', 'David Flanagan', 'Marijn Haverbeke', 'Marijn Haverbeke', 'code quickly', 
'Matthew Python','J.D Gauchat','Andy Harris','Jennifer Robbins', 'Eric A. Meyer and Estelle Weyl', 'Jennifer Robbins', 'Aurélien Géron', 'Aurélien Géron', 'Damon Lee Ph.D.', 'Code Quickly',
'Eric Freeman  and  Elisabeth Robson', 'Adnan Aziz', 'Tony Gaddis', 'Jon Duckett', 'Stroustrup Bjarne', 'Siddhartha Rao', 

];
const rateArr = [4.5, 5,4.6,4.5,4.7, 4.7, 4.6, 4.6, 4.7, 4, 4.5, 4.6, 4.6, 4.5, 4.6, 4.8, 4.8, 4.3, 4.4, 4.4, 4.6, 4.5, 4.6, 4.8, 4.4,];

const descriptionArr = ['','','','','','','','','','','','','','','','','','','','','','','','','']
const imageArr =['./images/Learning Web Design.jpg',  // 0
  './images/HTML and CSS QuickStart Guide.jpg',  // 1
  './images/Head First HTML and CSS.jpg',  // 2
  './images/Learn CSS in One Day and Learn It Well.jpg',  // 3
  './images/Responsive Web Design with HTML5 and CSS.jpg',  // 4
  './images/JavaScript The Definitive Guide.jpg',  // 5
  './images/Eloquent JavaScript.jpg',  // 6
  './images/Head First JavaScript Programming.jpg',  // 7
  './images/Learn JavaScript Quickly.jpg',  // 8
  './images/JJavascript for Beginners.jpg',  // 9
  './images/HTML5 for Masterminds.jpg',  // 10
  './images/HTML5 and CSS3 All-in-One For Dummies.jpg',  // 11
  './images/HTML5 Pocket Reference.jpg',  // 12
  './images/CSS  The Definitive Guide.jpg',  // 13
  './images/Python Crash Course.jpg',  // 14
  './images/Hands-On Machine Learning with Scikit-Learn.jpg',  // 15
  './images/Python for Everybody.jpg',  // 16
  './images/Build Your Own AI Investor.jpg', // 17
  './images/Learn Python Quickly.jpg', // 18
  './images/Head First Design Patternsn.jpg',  // 19
  '/images/Elements of Programming Interviews in Java.jpg',  // 20
  './images/Starting Out with Java.jpg',  // 21
  './images/JavaScript and JQuery.jpg',  // 22
  './images/A Tour of C++.jpg',  // 23
  './images/C++ in One Hour a Day.jpg',  // 24
];
 

            
const tag_html=[1,2];
const tag_css=[1,2,3,4,11];
const tag_javaScript = [5,6,7,8,9,22];
const tag_html5=[4,10,11,12];
const python = [14,16,18];
const tag_c_plus = [23,24];
const tag_web_Design = [0,1,2,3,4,10,11,12,13];
const tag_beginners = [0,2,5,6,7,8,14,15,16,17,18];
const tag_advanced = [1,3,4,9,10,11,12,13,19,20,21,22,23,24];
const tag_cheap_book = [3,8,9,10,11,12,14,18,19];



const tags_name =['HTML' , 'CSS' ,'JavaScript' ,'HTML 5' ,'Python' , 'C++' ,
 'web Design' , 'Beginners' ,'Advanced' ,'Cheap Book'] ;

const tags =[tag_html,tag_css,tag_javaScript,tag_html5,python,tag_c_plus,
  tag_web_Design,tag_beginners,tag_advanced,tag_cheap_book];

const paid_Book = [];

for (let i = 0;i<bnameArr.length;i++){
  paid_Book.push(new paid_Book_data(bnameArr[i],priceArr[i],authorArr[i],rateArr[i],descriptionArr[i],imageArr[i]));
}

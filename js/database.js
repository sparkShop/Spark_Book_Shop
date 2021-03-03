'use strict';

// All Data
function Book_data(name, rate, image, description, price, link) {
  let object = {
    // Book title
    name: name,
    // Image
    image: image,
    // Rate Out of 5
    rate: rate,
    // Book Description
    description: description,
    // Book price , use 0 for free Book
    price: price,
    // Book Link , Use '' for hard copy book
    link: link,
  };
  return object;
}
// Book Categories :
// eslint-disable-next-line no-unused-vars
const front_end_books = [
  new Book_data(
    'front_end_books',
    4,
    '../images/A Tour of C++.jpg',
    '--------------********',
    '',
    '../book1.pdf'
  ),
  new Book_data(
    'front_end_books',
    4,
    '../images/A Tour of C++.jpg',
    '',
    '',
    '../book1.pdf'
  ),
  new Book_data(
    'front_end_books',
    4,
    '../images/A Tour of C++.jpg',
    '',
    '',
    '../book1.pdf'
  ),
  new Book_data(
    'front_end_books',
    4,
    '../images/A Tour of C++.jpg',
    '',
    '',
    '../book1.pdf'
  ),
  new Book_data(
    'front_end_books',
    4,
    '../images/A Tour of C++.jpg',
    '',
    '',
    '../book1.pdf'
  ),
  new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf'),
  new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf'),
  new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf'),
];
// eslint-disable-next-line no-unused-vars
const back_end_books = [
  new Book_data(
    'front_end_books',
    4,
    '../images/A Tour of C++.jpg',
    '',
    '',
    '../book1.pdf'
  ),
  new Book_data(
    'front_end_books',
    4,
    '../images/A Tour of C++.jpg',
    '',
    '',
    '../book1.pdf'
  ),
  new Book_data(
    'front_end_books',
    4,
    '../images/A Tour of C++.jpg',
    '',
    '',
    '../book1.pdf'
  ),
  new Book_data(
    'front_end_books',
    4,
    '../images/A Tour of C++.jpg',
    '',
    '',
    '../book1.pdf'
  ),
  new Book_data(
    'front_end_books',
    4,
    '../images/A Tour of C++.jpg',
    '',
    '',
    '../book1.pdf'
  ),
  new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf'),
  new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf'),
  new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf'),
];

//----------- paid book data --------

// All Data For Paid book
function paid_Book_data(name, price, author, rate, description, image) {
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

const bnameArr2 = [
  'Learning Web Design: A Beginner`s Guide to HTML, CSS, JavaScript, and Web Graphics 5th Edition',
  'HTML and CSS QuickStart Guide: The Simplified Beginners Guide to Developing a Strong Coding Foundation, Building Responsive Websites,and Mastering the Fundamentals of Modern Web Design',
  'Head First HTML and CSS: A Learner`s Guide to Creating Standards-Based Web Pages 2nd Edition',
  'CSS (with HTML5): Learn CSS in One Day and Learn It Well. CSS for Beginners with Hands-on Project. Includes HTML5. (Learn Coding Fast with Hands-On Project Book 2)',
  'Responsive Web Design with HTML5 and CSS: Develop future-proof responsive websites using the latest HTML5 and CSS techniques, 3rd Edition',
  'JavaScript The Definitive Guide Master the World`s Most-Used Programming Language',
  'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming Paperback',
  'Head First JavaScript Programming: A Brain-Friendly Guide',
  'Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project)',
  'Javascript for Beginners: The Simplified for Absolute Beginner’s Guide to Learn and Understand Computer Programming Coding with Javascript Step by Step. Basics Concepts and Practice Examples Inside',
  'HTML5 for Masterminds, 3rd Edition: How to take advantage of HTML5 to create responsive websites and revolutionary applications',
  'HTML5 and CSS3 All-in-One For Dummies',
  'HTML5 Pocket Reference: Quick, Comprehensive, Indispensable (Pocket Reference (O`Reilly)',
  'CSS: The Definitive Guide: Visual Presentation for the Web',
  'Python Crash Course, 2nd Edition A Hands-On, Project-Based Introduction to Programming',
  'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems',
  'Python for Everybody: Exploring Data in Python 3 Paperback',
  'Build Your Own AI Investor: With Machine Learning and Python, Step by Step',
  'Learn Python Quickly: A Complete Beginner’s Guide to Learning Python, Even If You’re New to Programming',
  'Head First Design Patterns: Building Extensible and Maintainable Object-Oriented Software',
  'Elements of Programming Interviews in Java: The Insiders Guide',
  'Starting Out with Java',
  'JavaScript and JQuery: Interactive Front-End Web Development',
  'A Tour of C++ (C++ In-Depth Series)',
  'C++ in One Hour a Day, Sams Teach Yourself',
];

const priceArr2 = [
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
const authorArr2 = [
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
const rateArr2 = [
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

const descriptionArr2 = [
  'Do you want to build web pages but have no prior experience? This friendly guide is the perfect place to start. You’ll begin at square one, learning how the web and web pages work, and then steadily build from there. By the end of the book, you’ll have the skills to create a simple site with multicolumn pages that adapt for mobile devices. Each chapter provides exercises to help you learn various techniques and short quizzes to make sure you understand key concepts..',
  'Every one of the over 4 billion webpages online today use HTML markup language to display its content. HTML is everywhere. Experienced developers know that a mastery of HTML and CSS fundamentals is not only an essential web design skill, but also the solid foundation of a robust coding skillset. In HTML & CSS QuickStart Guide author, instructor, and 10+ year Fortune 500 tech company veteran David DuRocher breaks down HTML5 and CSS3 fundamentals manageable, practical, and engaging segments designed for first-time developers. David’s unique and engaging ',
  'Tired of reading HTML books that only make sense after you`re an expert? Then it`s about time you picked up Head First HTML and really learned HTML. You want to learn HTML so you can finally create those web pages you`ve always wanted, so you can communicate more effectively with friends, family, fans, and fanatic customers. You also want to do it right so you can actually maintain and expand your web pages over time so they work in all browsers and mobile devices.',
  'Have you always wanted to learn to build your own website but are afraid it`ll be too difficult for you? Or perhaps you are a blogger who wants to tweak your blog`s design, without having to spend money on an expensive theme. This book is for you. You no longer have to waste your time and money learning HTML and CSS from lengthy books, expensive online courses or complicated tutorials.',
  'Key Features •	Understand what responsive web design is and its significance for modern web development •	Explore the latest developments in responsive web design including variable fonts, CSS Scroll Snap, and more •	Get to grips with the uses and benefits of the new CSS Grid layout Book Description Responsive Web Design with HTML5 and CSS, Third Edition is a renewed and extended version of one of the most comprehensive and bestselling books on the latest HTML5 and CSS tools and techniques for responsive web design. Written in the author`s signature friendly and informal style, this edition covers all the newest developments and improvements in responsive web design including better user accessibility, variable fonts and font loading, CSS Scroll Snap, and much, much more.',
  'JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout.',
  'avaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications. This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code.',
  'What will you learn from this book? This brain friendly guide teaches you everything from JavaScript language fundamentals to advanced topics, including objects, functions, and the browser’s document object model.',
  'Become a Master Coder and Cash In the Big Bucks: JavaScript Programming Made Easy. Do you want to develop a skill that will ensure you never go jobless again? Have you always wanted to learn how to program but could never afford those ridiculously expensive courses? Developers and programmers are amongst the highest paid professions in the world, and according to the US Bureau of Labor Statistics, the number of jobs for software and app developers will increase by a shocking 24% in the next few years.',
  'Is it a great idea to try to use JavaScript for computer programming? How would you use it? JavaScript is among the most widely used computer programming languages in the world. It has been in the computer programming field for well over 40 years, and it is known as a high level language due to the competence it has established in the programming field.',
  'This is the Revised 3rd Edition of HTML5 for Masterminds, now with a complete course on Web Development and Responsive Web Design. Learn how to create websites and applications for desktop and mobile devices with HTML, CSS, and JavaScript.',
  'A new edition of a bestseller covers the latest advances in web development! HTML5 and CSS3 are essential tools for creating dynamic websites and boast updates and enhanced features that can make your websites even more effective and unique.',
  'Need help finding the right HTML5 element or attribute for your web page or application? HTML5 Pocket Reference is the classic reference that web designers and developers have been keeping close at hand for more than thirteen years. This fifth edition has been updated to reflect the current state of HTML5, including the HTML5 Candidate Recommendation, the emerging HTML5.',
  'f you’re a web designer or app developer interested in sophisticated page styling, improved accessibility, and saving time and effort, this book is for you. This revised edition provides a comprehensive guide to CSS implementation, along with a thorough review of the latest CSS specifications. CSS is a constantly evolving language for describing the presentation of web content on screen, printers, speech synthesizers, screen readers, and chat windows.',
  'Python Crash Course is the world`s best-selling guide to the Python programming language. This fast-paced, thorough introduction to programming with Python will have you writing programs, solving problems, and making things that work in no time.',
  'Description : Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data.',
  'Python for Everybody is designed to introduce students to programming and software development through the lens of exploring data. You can think of the Python programming language as your tool to solve data problems that are beyond the capability of a spreadsheet.Python is an easy to use and easy to learn programming language that is freely available on Macintosh, Windows, or Linux computers.',
  'Build Your Own AI Investor •	Breaks down Value Investing for the AI revolution, whilst being accessible to anyone, even if you`ve never invested in stocks or coded before •	Teaches Python step-by-step, from installation and the basics, all the way to creating your own AI Investor that picks stocks for you •	Watch the AI Portfolio: See AI portfolio performance over time on the website, made with the code in this book.',
  'Looking to learn Python? Python has gone to be one of the most popular programming languages in the world, and you will be one of the few people left out if you don’t add this knowledge to your arsenal. If you’re looking to learn Python, now is an excellent time to do so. But where do you begin? You can start right here, right now, with this book. It makes learning Python simple, fast, and easy, taking away the confusion from learning a new language.',
  'What will you learn from this book? You know you don`t want to reinvent the wheel, so you look to Design Patterns: the lessons learned by those who`ve faced the same software design problems. With Design Patterns, you get to take advantage of the best practices and experience of others so you can spend your time on something more challenging.',
  'This is the Java version of our book. See our website for links to the C++ version.Have you ever... •	Wanted to work at an exciting futuristic company? •	Struggled with an interview problem thatcould have been solved in 15 minutes? •	Wished you could study real-world computing problems? If so, you need to read Elements of Programming Interviews (EPI). EPI is your comprehensive guide to interviewing for software development roles.',
  'Provide a step-by-step introduction to programming in Java Starting Out with Java: From Control Structures through Objects provides a step-by-step introduction to programming in Java. Gaddis covers procedural programming–control structures and methods–before introducing object-oriented programming to ensure that students understand fundamental programming and problem-solving concepts.',
  'This full-color book will show you how to make your websites more interactive and your interfaces more interesting and intuitive. THIS BOOK COVERS: 1.	Basic programming concepts - assuming no prior knowledge of programming beyond an ability to create a web page using HTML & CSS 2.	Core elements of the JavaScript language - so you can learn how to write your own scripts from scratch 3.',
  'In A Tour of C++, Second Edition, Bjarne Stroustrup, the creator of C++, describes what constitutes modern C++. This concise, self-contained guide covers most major language features and the major standard-library components—not, of course, in great depth, but to a level that gives programmers a meaningful overview of the language, some key examples, and practical help in getting started.',
  'In just one hour a day, you’ll have all the skills you need to begin programming in C++. With this complete tutorial, you’ll quickly master the basics, and then move on to more advanced features and concepts. Completely updated for the C++14 standard, with a preview of C++17, this book presents the language from a practical point of view, helping you learn how to use C++ to create faster, simpler, and more efficient C++ applications.',
];
const imageArr2 = [
  './images/Learning Web Design.jpg', // 0
  './images/HTML and CSS QuickStart Guide.jpg', // 1
  './images/Head First HTML and CSS.jpg', // 2
  './images/Learn CSS in One Day and Learn It Well.jpg', // 3
  './images/Responsive Web Design with HTML5 and CSS.jpg', // 4
  './images/JavaScript The Definitive Guide.jpg', // 5
  './images/Eloquent JavaScript.jpg', // 6
  './images/Head First JavaScript Programming.jpg', // 7
  './images/Learn JavaScript Quickly.jpg', // 8
  './images/JJavascript for Beginners.jpg', // 9
  './images/HTML5 for Masterminds.jpg', // 10
  './images/HTML5 and CSS3 All-in-One For Dummies.jpg', // 11
  './images/HTML5 Pocket Reference.jpg', // 12
  './images/CSS  The Definitive Guide.jpg', // 13
  './images/Python Crash Course.jpg', // 14
  './images/Hands-On Machine Learning with Scikit-Learn.jpg', // 15
  './images/Python for Everybody.jpg', // 16
  './images/Build Your Own AI Investor.jpg', // 17
  './images/Learn Python Quickly.jpg', // 18
  './images/Head First Design Patternsn.jpg', // 19
  '/images/Elements of Programming Interviews in Java.jpg', // 20
  './images/Starting Out with Java.jpg', // 21
  './images/JavaScript and JQuery.jpg', // 22
  './images/A Tour of C++.jpg', // 23
  './images/C++ in One Hour a Day.jpg', // 24
];

const tag_html = [1, 2, 4, 10, 11, 12];
const tag_css = [1, 2, 3, 4, 11];
const tag_javaScript = [5, 6, 7, 8, 9, 22];
const tag_html5 = [4, 10, 11, 12];
const python = [14, 16, 18];
const tag_c_plus = [23, 24];
const tag_web_Design = [0, 1, 2, 3, 4, 10, 11, 12, 13];
const tag_beginners = [0, 2, 5, 6, 7, 8, 14, 15, 16, 17, 18];
const tag_advanced = [1, 3, 4, 9, 10, 11, 12, 13, 19, 20, 21, 22, 23, 24];
const tag_cheap_book = [3, 8, 9, 10, 11, 12, 14, 18, 19];

// eslint-disable-next-line no-unused-vars
const tags_name = [
  'HTML',
  'CSS',
  'JavaScript',
  'HTML 5',
  'Python',
  'C++',
  'Web Design',
  'Beginners',
  'Advanced',
  'Low Price',
];

// eslint-disable-next-line no-unused-vars
const tags = [
  tag_html,
  tag_css,
  tag_javaScript,
  tag_html5,
  python,
  tag_c_plus,
  tag_web_Design,
  tag_beginners,
  tag_advanced,
  tag_cheap_book,
];

const paid_Book = [];

for (let i = 0; i < bnameArr2.length; i++) {
  paid_Book.push(
    // eslint-disable-next-line new-cap
    new paid_Book_data(
      bnameArr2[i],
      priceArr2[i],
      authorArr2[i],
      rateArr2[i],
      descriptionArr2[i],
      imageArr2[i]
    )
  );
}

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
  'Do you want to build web pages but have no prior experience? This friendly guide is the perfect place to start. You’ll begin at square one, learning how the web and web pages work, and then steadily build from there. By the end of the book, you’ll have the skills to create a simple site with multicolumn pages that adapt for mobile devices. Each chapter provides exercises to help you learn various techniques and short quizzes to make sure you understand key concepts. This thoroughly revised edition is ideal for students and professionals of all backgrounds and skill levels. It is simple and clear enough for beginners, yet thorough enough to be a useful reference for experienced developers keeping their skills up to date. •	Build HTML pages with text, links, images, tables, and forms •	Use style sheets (CSS) for colors, backgrounds, formatting text, page layout, and even simple animation effects •	Learn how JavaScript works and why the language is so important in web design •	Create and optimize web images so they’ll download as quickly as possible •	NEW! Use CSS Flexbox and Grid for sophisticated and flexible page layout •	NEW! Learn the ins and outs of Responsive Web Design to make web pages look great on all devices •	NEW! Become familiar with the command line, Git, and other tools in the modern web developer’s toolkit •	NEW! Get to know the super-powers of SVG graphics •	Print length : 810 pages •	Publication date : May 11, 2018 •	Language : English •	File size : 140152 KB',
  'Every one of the over 4 billion webpages online today use HTML markup language to display its content. HTML is everywhere. Experienced developers know that a mastery of HTML and CSS fundamentals is not only an essential web design skill, but also the solid foundation of a robust coding skillset. In HTML & CSS QuickStart Guide author, instructor, and 10+ year Fortune 500 tech company veteran David DuRocher breaks down HTML5 and CSS3 fundamentals manageable, practical, and engaging segments designed for first-time developers. David’s unique and engaging approach to teaching HTML and CSS principles means that readers are ready to start designing from the very first chapter without enduring an avalanche of boring jargon or dry technobabble. Use the enclosed bonus digital asset access to go beyond the book with your own hands-on project, GitHub code repository, online tools, resources, and more! No matter whether you are a student, jobseeker looking to improve your resume, freelancer, designer, experienced developer, or just someone who wants to create their own website from scratch, everything you need to know is right here in this book! Truly anyone, at any stage of their lives, can learn to code. HTML and CSS are the perfect starting point on that journey—easy to learn, easy to implement, HTML & CSS open the door to a world of coding possibilities. HTML & CSS QuickStart Guide Is Perfect For: •	Jobseekers looking to increase the value of their resume •	Artists, bloggers, and digital entrepreneurs who want to customize their web presence •	WordPress, Shopify, and Squarespace users who want to tweak templates and make them their own •	Anyone who wants to create attractive, responsive, and modern websites with no prior experience needed HTML & CSS QuickStart Guide Covers: •	HTML and CSS for Beginners – all of the core HTML and CSS fundamentals you need to know in one place •	HTML tags, CSS elements, CSS styling, and exactly how to fit the pieces together •	Futureproofing – how to design sites that look great on any browser, any device •	How to save time using best practices to produce clean and tidy code •	Formatting, sizing, fonts, images, multimedia, forms, sprites, and gradients – all of the tools you need to make your website 100% your own! HTML and CSS QuickStart Guide Will Teach You: •	Modern Web Design Fundamentals – How to use the powerful combination of HTML5 and CSS3 to build functional and responsive web pages •	Site Structure and Responsive Design Principles – How to format HTML and CSS markup to produce attractive web sites and web pages that look great on any browser and any device. •	Breathing Life Into Your Projects – How to incorporate forms, multimedia elements, special characters and more into your web projects •	Correct Markup Best Practices – How to efficiently use CSS and HTML together to produce clean, professional HTML documents using industry-standard tools such as GitHub •	HTML and CSS for Beginners – HTML and CSS elements, formatting, padding, gradients, menus, testing, debugging, keeping your site’s code up to date and more—all supported with abundant visual examples and a practical hands-on project! *LIFETIME ACCESS TO FREE HTML AND CSS DIGITAL ASSETS* •	A complete hands-on project using an industry-standard GitHub code repository along with a complete online HTML, CSS, and web design resource library, web development cheat sheets, and more! 1.	Print length 468 pages 2.	Language English 3.	Publication date January 21, 2021 4.	File size 17654 KB',
  'Tired of reading HTML books that only make sense after you`re an expert? Then it`s about time you picked up Head First HTML and really learned HTML. You want to learn HTML so you can finally create those web pages you`ve always wanted, so you can communicate more effectively with friends, family, fans, and fanatic customers. You also want to do it right so you can actually maintain and expand your web pages over time so they work in all browsers and mobile devices. Oh, and if you`ve never heard of CSS, that`s okay--we won`t tell anyone you`re still partying like it`s 1999--but if you`re going to create web pages in the 21st century then you`ll want to know and understand CSS. Learn the real secrets of creating web pages, and why everything your boss told you about HTML tables is probably wrong (and what to do instead). Most importantly, hold your own with your co-worker (and impress cocktail party guests) when he casually mentions how his HTML is now strict, and his CSS is in an external style sheet. With Head First HTML, you`ll avoid the embarrassment of thinking web-safe colors still matter, and the foolishness of slipping a font tag into your pages. Best of all, you`ll learn HTML and CSS in a way that won`t put you to sleep. If you`ve read a Head First book, you know what to expect: a visually-rich format designed for the way your brain works. Using the latest research in neurobiology, cognitive science, and learning theory, this book will load HTML and CSS into your brain in a way that sticks. So what are you waiting for? Leave those other dusty books behind and come join us in Webville. Your tour is about to begin. •	Publication date : August 16, 2012 •	Language : English •	File size : 61873 KB •	Print length : 1168 pages',
  'Have you always wanted to learn to build your own website but are afraid it`ll be too difficult for you? Or perhaps you are a blogger who wants to tweak your blog`s design, without having to spend money on an expensive theme. This book is for you. You no longer have to waste your time and money learning HTML and CSS from lengthy books, expensive online courses or complicated tutorials. What this book offers... HTML and CSS for Beginners Complex concepts are broken down into simple steps to ensure that you can easily master the two languages even if you have never coded before. Carefully Chosen Examples (with images) Examples are carefully chosen to illustrate all concepts. In addition, images are provided whenever necessary so that you can immediately see the visual effects of various CSS properties. Learn The Languages Fast Concepts are presented in a "to-the-point" style to cater to the busy individual. With this book, you can learn HTML and CSS in just one day and start coding immediately. How is this book different... The best way to learn programming is by doing. End-of-Chapter Exercises Each CSS chapter comes with an end-of-chapter exercise where you get to practice the different CSS properties covered in the chapter and see first hand how different CSS values affect the design of the website. Bonus Project The book also includes a bonus project that requires the application of all the HTML and CSS concepts taught previously. Working through the project will not only give you an immense sense of achievement, it’ll also help you see how the various concepts tie together. Are you ready to dip your toes into the exciting world of web development? This book is for you. Click the BUY button and download it now. What you`ll learn:  What is CSS and HTML? - What software do you need to write and run CSS codes? - What are HTML tags and elements? - What are the commonly used HTML tags and how to use them? - What are HTML IDs and Classes? - What is the basic CSS syntax? - What are CSS selectors? - What are pseudo classes and pseudo elements? - How to apply CSS rules to your website and what is the order of precedence? - What is the CSS box model? - How to position and float your CSS boxes - How to hide HTML content - How to change the background of CSS boxes - How to use the CSS color property to change colors - How to modify text and font of a website - How to create navigation bars - How to create gorgeous looking tables to display your data .. and more... Click the BUY button and download the book now to start learning HTML and CSS now. Learn them fast and learn them well. Tags: ------------ CSS, HTML5, web development, web page design, CSS examples, CSS tutorials, CSS coding, CSS for Dummies Print length 121 pages Language English Publication date March 9, 2015 File size 487 KB',
  'Key Features •	Understand what responsive web design is and its significance for modern web development •	Explore the latest developments in responsive web design including variable fonts, CSS Scroll Snap, and more •	Get to grips with the uses and benefits of the new CSS Grid layout Book Description Responsive Web Design with HTML5 and CSS, Third Edition is a renewed and extended version of one of the most comprehensive and bestselling books on the latest HTML5 and CSS tools and techniques for responsive web design. Written in the author`s signature friendly and informal style, this edition covers all the newest developments and improvements in responsive web design including better user accessibility, variable fonts and font loading, CSS Scroll Snap, and much, much more. With a new chapter dedicated to CSS Grid, you will understand how it differs from the Flexbox layout mechanism and when you should use one over the other. Furthermore, you will acquire practical knowledge of SVG, writing accessible HTML markup, creating stunning aesthetics and effects with CSS, applying transitions, transformations, and animations, integrating media queries, and more. The book concludes by exploring some exclusive tips and approaches for front-end development from the author. By the end of this book, you will not only have a comprehensive understanding of responsive web design and what is possible with the latest HTML5 and CSS, but also the knowledge of how to best implement each technique. What you will learn •	Integrate CSS media queries into your designs; apply different styles to different devices •	Load different sets of images depending upon screen size or resolution •	Leverage the speed, semantics, and clean markup of accessible HTML patterns •	Implement SVGs into your designs to provide resolution-independent images •	Apply the latest features of CSS like custom properties, variable fonts, and CSS Grid •	Add validation and interface elements like date and color pickers to HTML forms •	Understand the multitude of ways to enhance interface elements with filters, shadows, animations, and more Who this book is for Are you a full-stack developer who needs to gem up on their front-end skills? Perhaps you work on the front-end and you need a definitive overview of all modern HTML and CSS has to offer? Maybe you have done a little website building but you need a deep understanding of responsive web designs and how to achieve them? This is a book for you! All you need to take advantage of this book is a working understanding of HTML and CSS. No JavaScript knowledge is needed. Table of Contents 1.	The Essentials of Responsive Web Design 2.	Writing HTML Markup 3.	Media Queries – Supporting Differing Viewports 4.	Fluid Layout, Flexbox, and Responsive Images 5.	Layout with CSS Grid 6.	CSS Selectors, Typography, Color Modes, and More 7.	Stunning Aesthetics with CSS 8.	Using SVGs for Resolution Independence 9.	Transitions, Transformations, and Animations 10.	Conquer Forms with HTML5 and CSS 11.	Bonus Techniques and Parting Advice Print length 525 pages Language English Publication date April 30, 2020 File size 17638 KB',
  'JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js. Topics include: •	Types, values, variables, expressions, operators, statements, objects, and arrays •	Functions, classes, modules, iterators, generators, Promises, and async/await •	JavaScript’s standard library: data structures, regular expressions, JSON, i18n, etc. •	The web platform: documents, components, graphics, networking, storage, and threads •	Node.js: buffers, files, streams, threads, child processes, web clients, and web servers •	Tools and language extensions that professional JavaScript developers rely on. Language : English Paperback : 706 pages Item Weight : 2.65 pounds File size : 4175 KB',
  'avaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications. This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of Java¬Script and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope. A host of new exercises have also been added to test your skills and keep you on track. As with previous editions, Haverbeke continues to teach through extensive examples and immerses you in code from the start, while exercises and full-chapter projects give you hands-on experience with writing your own programs. You start by learning the basic structure of the JavaScript language as well as control structures, functions, and data structures to help you write basic programs. Then you`ll learn about error handling and bug fixing, modularity, and asynchronous programming before moving on to web browsers and how JavaScript is used to program them. As you build projects such as an artificial life simulation, a simple programming language, and a paint program, you`ll learn how to: - Understand the essential elements of programming, including syntax, control, and data - Organize and clarify your code with object-oriented and functional programming techniques - Script the browser and make basic web applications - Use the DOM effectively to interact with browsers - Harness Node.js to build servers and utilities Isn`t it time you became fluent in the language of the Web? * All source code is available online in an inter¬active sandbox, where you can edit the code, run it, and see its output instantly. Contents Introduction (Part 1: Language) Values, Types, and Operators Program Structure Functions Data Structures: Objects and Arrays Higher-order Functions The Secret Life of Objects Project: A Robot Bugs and Errors Regular Expressions Modules Asynchronous Programming Project: A Programming Language (Part 2: Browser) JavaScript and the Browser The Document Object Model Handling Events Project: A Platform Game Drawing on Canvas HTTP and Forms Project: A Pixel Art Editor (Part 3: Node) Node.js Project: Skill-Sharing Website Language : English Paperback : 472 pages Item Weight : 2 pounds Publication date December 4, 2018',
  'What will you learn from this book? This brain friendly guide teaches you everything from JavaScript language fundamentals to advanced topics, including objects, functions, and the browser’s document object model. You won’t just be reading—you’ll be playing games, solving puzzles, pondering mysteries, and interacting with JavaScript in ways you never imagined. And you’ll write real code, lots of it, so you can start building your own web applications. Prepare to open your mind as you learn (and nail) key topics including: •	The inner details of JavaScript •	How JavaScript works with the browser •	The secrets of JavaScript types •	Using arrays •	The power of functions •	How to work with objects •	Making use of prototypes •	Understanding closures •	Writing and testing applications What’s so special about this book? We think your time is too valuable to waste struggling with new concepts. Using the latest research in cognitive science and learning theory to craft a multi sensory learning experience, Head First JavaScript Programming uses a visually rich format designed for the way your brain works, not a text heavy approach that puts you to sleep. This book replaces Head First JavaScript, which is now out of print. (April 10, 2014) Language : English Paperback : 704 pages Item Weight : 2.8 pounds',
  'Become a Master Coder and Cash In the Big Bucks: JavaScript Programming Made Easy. Do you want to develop a skill that will ensure you never go jobless again? Have you always wanted to learn how to program but could never afford those ridiculously expensive courses? Developers and programmers are amongst the highest paid professions in the world, and according to the US Bureau of Labor Statistics, the number of jobs for software and app developers will increase by a shocking 24% in the next few years. In 2019, the tech industry posted 4.6 million job openings in the US job market, and their direct economic output was estimated at 1.9 trillion dollars. There’s no doubt that the IT industry is the future, and software, web, and app developers are and will be the most coveted professionals for many years to come. But here’s the shock you may not have seen coming: the IT industry has a backdoor--you only need to know how to open it in order to jump straight on that cash wagon. The key to that door is JavaScript, a programming language that has withstood the test of time and has become one of the most used languages. You might have heard about some of the companies that use JavaScript: Netflix, Google, Microsoft, eBay, Facebook, Uber, PayPal… The list goes on and on. Being proficient in JavaScript will basically ensure that you never run out of job options. As with pursuing any new concept, learning how to program can be intimidating, especially for beginners. Even though JavaScript is incredibly beginner-friendly, it’s still complex enough for you to need a guide to lead you through the process of mastering it. In Learn JavaScript Quickly, you will discover: •	A full beginner’s guide on programming, including the simplest, most basic things all newbies should know before getting started with JavaScript •	Step-by-step mentorship through JavaScript’s crucial concepts, rules, and functions •	2 bonus guides on HTML and CSS to ensure that you’re fully equipped with all the essentials for achievement in a highly competitive job market •	The best techniques and tools to supplement your JavaScript knowledge, allowing for frustration-free learning •	Simple explanations for all programming tasks, such as creating Array elements and handling HTML events, so that comprehension won’t be an issue •	Helpful programming exercises and tasks (solutions included) to challenge yourself and fully master JavaScript •	How to create complex websites in record time, simply by following the straightforward instructions provided inside And much more. Don’t let the fact that you’ve never programmed before stop you from having a highly profitable career--JavaScript is the simplest programming language anyone can learn. We all start somewhere, but you first need to make sure you start out on the right foot and equip yourself with the best tools of the trade. If you’re ready to discover the intricate, profitable world of programming and JavaScript, then scroll up and click the “Add to Cart” button right now. Print length 174 pages Language English Publication date November 10, 2020 •	Item Weight : 14.4 ounces',
  'Is it a great idea to try to use JavaScript for computer programming? How would you use it? JavaScript is among the most widely used computer programming languages in the world. It has been in the computer programming field for well over 40 years, and it is known as a high level language due to the competence it has established in the programming field. JavaScript is used by various software companies in the world, so much so that many computer operations will not work without it. So, it’s a great idea to try using it, too. The most exciting feature of JavaScript is that it allows you to program using English-based commands, not numeric codes and that makes it a whole lot easier for humans to program. This means programmers can read and easily understand the computer language. Another uniqueness of JavaScript is that the producing company always update the language so that modern operations and newly developed patterns can be easily programmed into a computer. That sounds great, and that is a reason you should trust JavaScript. But that certainly comes with a load of problems. It makes it all the more complicated for you to try using JavaScript. The first is that there are vital skills you need in order to navigate JavaScript as an expert. If you are a beginner who hasn’t even run the JavaScript application by accident or you have some raw idea, the audiobook can help you explore easily. It will provide details of data structure, basic programming structure, advance programming structure, various kinds of test execution, and so many others. It is also written in a simple and relative style that would answer every question you have at every turn of practice. This book is ideal for you as a starter who knows nothing about programming. Step by step, you will find all the basics of computer coding with JavaScript. So, be sure that listening to this means you are training to become a top-class programmer who can confidently code computers with a sound understanding of JavaScript basics. Print length :220 pages Language English Publication date :February 3, 2020 File size 3858 KB',
  'This is the Revised 3rd Edition of HTML5 for Masterminds, now with a complete course on Web Development and Responsive Web Design. Learn how to create websites and applications for desktop and mobile devices with HTML, CSS, and JavaScript. HTML5 for Masterminds leads the reader step-by-step to master the complex subjects required to create websites and web applications. After reading this book, you will know how to structure your documents with HTML, how to style them with CSS, and how to work with the most powerful JavaScript APIs. This book is not an introduction, but instead a complete course that teaches you how to build responsive websites and amazing web applications from scratch. Every chapter explores both basic and sophisticated concepts of HTML, CSS, and JavaScript. Functional examples support the information introduced in every chapter to guide beginners and experts throughout every single element, style, and function included in these languages. The goal of HTML5 for Masterminds is to make you familiar with the most advanced technologies for the web. It was designed to prepare you for the future, and it was written for the genius inside you, for Masterminds. This book includes: How to create HTML5 documents How to create CSS3 Style Sheets How to program in JavaScript How to design websites with Responsive Web Design How to create 2D and 3D Graphics How to create 2D and 3D Animations How to create 2D and 3D Video Games JavaScript APIs: •	Form API •	Canvas API •	WebGL API and Three.js •	Web Audio API •	IndexedDB API •	Web Storage API •	File API •	Web Socket API •	WebRTC API •	Stream API •	FullScreen API •	Ajax Level 2 •	Web Workers API •	Drag and Drop API •	History API •	Web Messaging API •	Pointer Lock API •	Geolocation API •	Page Visibility API •	TextTrack API HTML5, CSS3, and JavaScript Print length 624 pages Language English Publication date November 28, 2018 File size 8050 KB',
  'A new edition of a bestseller covers the latest advances in web development! HTML5 and CSS3 are essential tools for creating dynamic websites and boast updates and enhanced features that can make your websites even more effective and unique. This friendly, all-in-one guide covers everything you need to know about each of these technologies and their latest versions so that you can use them together. Building on the bestselling formats of the first two editions, this new edition teaches you the fundamentals of HTML5 and CSS3, and then presents ways for using them with JavaScript, MySQL, and Ajax to create websites that work. •	Covers using JavaScript, PHP, MySQL, and Ajax in the context of programming dynamic web pages with CSS3 and HTML5 •	Includes self-contained minibooks that review HTML, CSS, design and layout, client-side JavaScript, Ajax and server-side, and putting it all together •	Examines new web development advancements including new technologies and changes to the standards •	Features a website that contains supporting materials including code and several valuable programs that are useful for web development HTML5 and CSS3 All-in-One For Dummies, 3rd Edition serves as the perfect reference for both web development beginners and seasoned professionals looking to learn more about how to get the most out of the powerful combination of HTML5 and CSS3. •	Publication date : January 8, 2014 •	Language : English •	File size : 21817 KB Print length : 987 pages',
  'Need help finding the right HTML5 element or attribute for your web page or application? HTML5 Pocket Reference is the classic reference that web designers and developers have been keeping close at hand for more than thirteen years. This fifth edition has been updated to reflect the current state of HTML5, including the HTML5 Candidate Recommendation, the emerging HTML5.1 Working Draft, and the living WHATWG standard. Features include: •	An alphabetical listing of every element and attribute in HTML5, HTML5.1, and the WHATWG living standard •	Descriptions, markup examples, content categories, content models, and start- and end-tag requirements for every element •	At-a-glance notes indicating the differences between the HTML5 specifications and HTML 4.01 •	Useful charts of special characters •	An overview of HTML5 APIs If you’re an experienced web designer or developer who needs a quick resource for working with established web standards, this handy book is indispensable. •	Publication date : July 19, 2013 •	Language : English •	File size : 989 KB •	Print length : 312 pages',
  'f you’re a web designer or app developer interested in sophisticated page styling, improved accessibility, and saving time and effort, this book is for you. This revised edition provides a comprehensive guide to CSS implementation, along with a thorough review of the latest CSS specifications. CSS is a constantly evolving language for describing the presentation of web content on screen, printers, speech synthesizers, screen readers, and chat windows. It is used by all browsers on all screen sizes on all types of IoT devices, including phones, computers, video games, televisions, watches, kiosks, and auto consoles. Authors Eric Meyer and Estelle Weyl show you how to improve user experience, speed development, avoid potential bugs, and add life and depth to your applications through layout, transitions and animations, borders, backgrounds, text properties, and many other tools and techniques. This guide covers: •	Selectors, specificity, and the cascade •	Values, units, fonts, and text properties •	Padding, borders, outlines, and margins •	Colors, backgrounds, and gradients •	Floats and positioning tricks •	Flexible box layout •	The new Grid layout system •	2D and 3D transforms, transitions, and animation •	Filters, blending, clipping, and masking •	Media and feature queries •	Publication date : October 16, 2017 •	Language : English •	File size : 105808 KB •	Print length : 1092 pages',
  'Python Crash Course is the world`s best-selling guide to the Python programming language. This fast-paced, thorough introduction to programming with Python will have you writing programs, solving problems, and making things that work in no time. In the first half of the book, you`ll learn basic programming concepts, such as variables, lists, classes, and loops, and practice writing clean code with exercises for each topic. You`ll also learn how to make your programs interactive and test your code safely before adding it to a project. In the second half, you`ll put your new knowledge into practice with three substantial projects: a Space Invaders-inspired arcade game, a set of data visualizations with Python`s handy libraries, and a simple web app you can deploy online. As you work through the book, you`ll learn how to: •  Use powerful Python libraries and tools, including Pygame, Matplotlib, Plotly, and Django •  Make 2D games that respond to keypresses and mouse clicks, and that increase in difficulty •  Use data to generate interactive visualizations •  Create and customize web apps and deploy them safely online •  Deal with mistakes and errors so you can solve your own programming problems If you`ve been thinking about digging into programming, Python Crash Course will get you writing real programs fast. Why wait any longer? Start your engines and code! Print length 544 pages Language English Publication date May 3, 2019 Item Weight : 2.3 pounds',
  'Description : Through a series of recent breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This practical book shows you how. By using concrete examples, minimal theory, and two production-ready Python frameworks—Scikit-Learn and TensorFlow—author Aurélien Géron helps you gain an intuitive understanding of the concepts and tools for building intelligent systems. You’ll learn a range of techniques, starting with simple linear regression and progressing to deep neural networks. With exercises in each chapter to help you apply what you’ve learned, all you need is programming experience to get started. •	Explore the machine learning landscape, particularly neural nets •	Use Scikit-Learn to track an example machine-learning project end-to-end •	Explore several training models, including support vector machines, decision trees, random forests, and ensemble methods •	Use the TensorFlow library to build and train neural nets •	Dive into neural net architectures, including convolutional nets, recurrent nets, and deep reinforcement learning •	Learn techniques for training and scaling deep neural nets. •	Language : English •	Paperback : 856 pages •	Item Weight : 2.8 pounds (October 15, 2019)',
  'Python for Everybody is designed to introduce students to programming and software development through the lens of exploring data. You can think of the Python programming language as your tool to solve data problems that are beyond the capability of a spreadsheet.Python is an easy to use and easy to learn programming language that is freely available on Macintosh, Windows, or Linux computers. So once you learn Python you can use it for the rest of your career without needing to purchase any software.This book uses the Python 3 language. The earlier Python 2 version of this book is titled "Python for Informatics: Exploring Information".There are free downloadable electronic copies of this book in various formats and supporting materials for the book at www.py4e.com. The course materials are available to you under a Creative Commons License so you can adapt them to teach your own Python course. 1.	Print length 245 pages 2.	Language English 3.	Publication date April 9, 2016 •	Item Weight : 15.2 ounces',
  'Build Your Own AI Investor •	Breaks down Value Investing for the AI revolution, whilst being accessible to anyone, even if you`ve never invested in stocks or coded before •	Teaches Python step-by-step, from installation and the basics, all the way to creating your own AI Investor that picks stocks for you •	Watch the AI Portfolio: See AI portfolio performance over time on the website, made with the code in this book. AI Investing •	Not sure how to approach the stock investing with AI? •	No time to learn these programming skills? Think it sounds daunting? •	Think the investing game is rigged by computer-wielding financial wizards? Do It All Yourself •	Discover Value Investing, the approach taken by the best investors: Warren Buffett, Joel Greenblatt, Michael Burry, Peter Lynch, John Templeton, Charlie Munger •	Build your own AI! Have your own Value Investing machine provide stock picks for the year •	No time? Set up the AI in a weekend by skipping ahead to Chapter 5 •	Anyone can learn the computing tools, every step is in this book to build a value investing AI Your AI Investor in action •	Make it personal, make your Robo-Investor as conservative or aggressive as you desire •	Watch how your AI would pick stocks over the last 10 years with backtesting, test your AI as thoroughly as you like Open source tools: All programming tools are available online for free. Working code from the book is available online for readers. Train your AI using free online historical stock market data. (For present day stock selection you will need a SimFin+ online subscription, no affiliation.) For beginners, exercises are provided in every chapter to develop your Python skills, slowly building competence until you can use Machine Learning tools for general problems. For advanced readers this books provides a good basis in value investing, framing the stock selection problem in a quantitative way, using Machine Learning algorithms on stock market data. 1.	Print length 208 pages 2.	Language English 3.	Publication date July 24, 2020 •	Item Weight : 13.8 ounces',
  'Looking to learn Python? Python has gone to be one of the most popular programming languages in the world, and you will be one of the few people left out if you don’t add this knowledge to your arsenal. If you’re looking to learn Python, now is an excellent time to do so. But where do you begin? You can start right here, right now, with this book. It makes learning Python simple, fast, and easy, taking away the confusion from learning a new language.  When learning a new language, it`s easy to be overwhelmed and not know where to start or what to focus on. You can spend a long time pursuing tutorials online only to find out you don`t really understand any of the concepts they covered. That won`t be a problem here! This book follows a step by step guide, walking you through everything you need to know about Python in an easy to follow fashion. It will teach you all the basics of Python, and even some of the more advanced Python concepts, taking you from beginner to intermediate Python programmer. This book will give you: •	A solid foundation in Python programming. •	Intermediate and advanced topics once you’ve mastered the basics. •	Simple explanations of code, broken down into easy to follow steps. •	Python programming exercises and solutions. •	Two projects at the end of the book designed to help you bring all the concepts you’ve learned together. •	Source code files you can refer to and run on your computer. The exercises in this book are designed to help you practice using the skills you’ve learned in the various sections. The final two projects will let you practice putting everything you’ve learned together and teaching you how to manipulate text, work with images, and create a simple Graphical User Interface (GUI). This book will help you master the following topics: •	Working with Python in both the command line and an Integrated Development Environment (IDE) •	Variables and operators •	Python data types •	Python data structures •	Handling inputs and outputs •	Getting user inputs •	Conditional/control flow statements •	Error handling •	Functions, parameters, and scope •	Built-in function •	Creating modules •	Object-oriented programming •	Reading and writing files •	Recursion •	Image handling And many more! As you read through the book, you’ll gain information about all these topics, broken down into easy to understand ideas with relevant, illustrative examples. So, if you’ve been looking to learn Python, you’ve come to the right place. You`ll be able to start your Python journey without confusion or worry, with a dependable guide to lead you. Now’s the best time to start learning Python, so click "Buy Now" and get started! 1.	Print length 175 pages 2.	Language English 3.	Publication date March 22, 2020',
  'What will you learn from this book? You know you don`t want to reinvent the wheel, so you look to Design Patterns: the lessons learned by those who`ve faced the same software design problems. With Design Patterns, you get to take advantage of the best practices and experience of others so you can spend your time on something more challenging. Something more fun. This book shows you the patterns that matter, when to use them and why, how to apply them to your own designs, and the object-oriented design principles on which they`re based. Join hundreds of thousands of developers who`ve improved their object-oriented design skills through Head First Design Patterns. What`s so special about this book? If you`ve read a Head First book, you know what to expect: a visually rich format designed for the way your brain works. With Head First Design Patterns, 2E you`ll learn design principles and patterns in a way that won`t put you to sleep, so you can get out there to solve software design problems and speak the language of patterns with others on your team. •	Language : English •	Paperback : 672 pages •	Item Weight : 2.65 pounds',
  'This is the Java version of our book. See our website for links to the C++ version.Have you ever... •	Wanted to work at an exciting futuristic company? •	Struggled with an interview problem thatcould have been solved in 15 minutes? •	Wished you could study real-world computing problems? If so, you need to read Elements of Programming Interviews (EPI). EPI is your comprehensive guide to interviewing for software development roles. The core of EPI is a collection of over 250 problems with detailed solutions. The problems are representative of interview questions asked at leading software companies. The problems are illustrated with 200 figures, 300 tested programs, and 150 additional variants. The book begins with a summary of the nontechnical aspects of interviewing, such as strategies for a great interview, common mistakes, perspectives from the other side of the table, tips on negotiating the best offer, and a guide to the best ways to use EPI. We also provide a summary of data structures, algorithms, and problem solving patterns. Coding problems are presented through a series of chapters on basic and advanced data structures, searching, sorting, algorithm design principles, and concurrency. Each chapter stars with a brief introduction, a case study, top tips, and a review of the most important library methods. This is followed by a broad and thought-provoking set of problems. A practical, fun approach to computer science fundamentals, as seen through the lens of common programming interview questions. Jeff Atwood/Co-founder, Stack Overflow and Discourse •	Language : English •	Paperback : 492 pages •	Item Weight : 1.8 pounds',
  'Provide a step-by-step introduction to programming in Java Starting Out with Java: From Control Structures through Objects provides a step-by-step introduction to programming in Java. Gaddis covers procedural programming–control structures and methods–before introducing object-oriented programming to ensure that students understand fundamental programming and problem-solving concepts. As with all Gaddis texts, every chapter contains clear and easy-to-read code listings, concise and practical real-world examples, and an abundance of exercises. With the 7th Edition, JavaFX has replaced Swing as the standard GUI library for Java in chapters that focus on GUI development. The Swing and Applet material from the previous edition is available online. Also available with MyLab Programming MyLab™ is the teaching and learning platform that empowers you to reach every student. By combining trusted author content with digital tools and a flexible platform, MyLab personalizes the learning experience and improves results for each student.With MyLab Programming, students work through hundreds of short, auto-graded coding exercises and receive immediate and helpful feedback based on their work. Note: You are purchasing a standalone product; MyLab Programming does not come packaged with this content. Students, if interested in purchasing this title with MyLab Programming, ask your instructor for the correct package ISBN and Course ID. Instructors, contact your Pearson representative for more information. •	Language : English •	Paperback : 1168 pages •	Item Weight : 3.88 pounds',
  'This full-color book will show you how to make your websites more interactive and your interfaces more interesting and intuitive. THIS BOOK COVERS: 1.	Basic programming concepts - assuming no prior knowledge of programming beyond an ability to create a web page using HTML & CSS 2.	Core elements of the JavaScript language - so you can learn how to write your own scripts from scratch 3.	jQuery - which will allow you to simplify the process of writing scripts (this is introduced half-way through the book once you have a solid understanding of JavaScript) 4.	How to recreate techniques you will have seen on other web sites such as sliders, content filters, form validation, updating content using Ajax, and much more (these examples demonstrate writing your own scripts from scratch and how the theory you have learned is put into practice). As with our first book (the best-selling HTML & CSS: Design and Build Websites), each chapter: •	Breaks subjects down into bite-sized chunks with a new topic on each page •	Contains clear descriptions of syntax, each one demonstrated with inspiring code samples •	Uses diagrams and photography to explain complex concepts in a visual way By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web, and be able to customize them - you will also be able to create your own scripts from scratch. If you`re looking to create more enriching web experiences, then this is the book for you. •	Language : English •	Paperback : 640 pages •	Item Weight : 3.21 pounds',
  'In A Tour of C++, Second Edition, Bjarne Stroustrup, the creator of C++, describes what constitutes modern C++. This concise, self-contained guide covers most major language features and the major standard-library components—not, of course, in great depth, but to a level that gives programmers a meaningful overview of the language, some key examples, and practical help in getting started. Stroustrup presents the C++ features in the context of the programming styles they support, such as object-oriented and generic programming. His tour is remarkably comprehensive. Coverage begins with the basics, then ranges widely through more advanced topics, including many that are new in C++17, such as move semantics, uniform initialization, lambda expressions, improved containers, random numbers, and concurrency. The tour even covers some extensions being made for C++20, such as concepts and modules, and ends with a discussion of the design and evolution of C++. This guide does not aim to teach you how to program (for that, see Stroustrup’s  Programming: Principles and Practice Using C++, Second Edition), nor will it be the only resource you’ll need for C++ mastery (for that, see Stroustrup’s  The C++ Programming Language, Fourth Edition, and recommended online sources). If, however, you are a C or C++ programmer wanting greater familiarity with the current C++ language, or a programmer versed in another language wishing to gain an accurate picture of the nature and benefits of modern C++, you can’t find a shorter or simpler introduction than this tour provides. •	Publication date : July 20, 2018 •	Language : English •	File size : 31737 KB •	Print length : 246 pages',
  'In just one hour a day, you’ll have all the skills you need to begin programming in C++. With this complete tutorial, you’ll quickly master the basics, and then move on to more advanced features and concepts. Completely updated for the C++14 standard, with a preview of C++17, this book presents the language from a practical point of view, helping you learn how to use C++ to create faster, simpler, and more efficient C++ applications. •	Master the fundamentals of C++ and object-oriented programming •	Understand how C++ features help you write compact and efficient code using concepts such as lambda expressions, move constructors, and assignment operators •	Learn best practices and avoid pitfalls via useful Do’s and Don’ts •	Learn the Standard Template Library, including containers and algorithms used in most real-world C++ applications •	Test your knowledge and expertise with exercises at the end of every lesson Learn on your own time, at your own pace: •	No previous programming experience required •	Write fast and powerful C++ programs, compile the source code, and create executable files •	Learn object-oriented programming concepts such as encapsulation, abstraction, inheritance, and polymorphism •	Use the Standard Template Library’s algorithms and containers to write feature-rich yet stable C++ applications •	Learn how automatic type deduction helps simplify C++ code •	Develop sophisticated programming techniques using lambda expressions, smart pointers, and move constructors •	Master the features of C++ by learning from programming experts •	Learn C++ features that allow you to program compact and high-performance C++ applications •	Preview what’s new in C++17 •	Language : English •	File size : 82580 KB •	Print length : 800 pages',
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
  'web Design',
  'Beginners',
  'Advanced',
  'Cheap Book',
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

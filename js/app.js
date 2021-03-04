'use strict';
// All Data
function Book_data(name, imgPath, image, description, price, link) {
  let object = {
    // Book title
    name: name,
    // Image
    image: image,
    // Rate Out of 5
    imgPath: imgPath,
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
const front_end_books = [
  new Book_data(
    'front_end_books',
    'https://drive.google.com/file/d/1eWq2GoO3q9dO5VbuWGERPmtQa_YmeJX8/view?usp=sharing',
    '../images/HTML5CSS3.JPG',
    '',
    '',
    'https://drive.google.com/u/0/uc?id=1eWq2GoO3q9dO5VbuWGERPmtQa_YmeJX8&export=download'
  ),
  new Book_data(
    'front_end_books',
    'https://drive.google.com/file/d/1BRasQMatvYcKbueMF_-k5vBKftuNdjZT/view?usp=sharing',
    '../images/how-to-code-in-html.png',
    '',
    '',
    'https://drive.google.com/u/0/uc?id=1BRasQMatvYcKbueMF_-k5vBKftuNdjZT&export=download'
  ),
  new Book_data(
    'front_end_books',
    'https://drive.google.com/file/d/1OelQxg66AYYOnyk9RiiP9bCq5sSUxQAZ/view?usp=sharing',
    '../images/Bootstrap-A-SitePoint-Anthology-1.png',
    '',
    '',
    'https://drive.google.com/u/0/uc?id=1OelQxg66AYYOnyk9RiiP9bCq5sSUxQAZ&export=download'
  ),
  new Book_data(
    'front_end_books',
    'https://drive.google.com/file/d/1HRAz-WXqqlSqoXsh-qfGiDSjpraqtmFw/view?usp=sharing',
    '../images/javascript.jpg',
    '',
    '',
    'https://drive.google.com/u/0/uc?id=1HRAz-WXqqlSqoXsh-qfGiDSjpraqtmFw&export=download'
  ),
  new Book_data(
    'front_end_books',
    'https://drive.google.com/file/d/1MbtyD3_AU9hFj55WAsQMZLhiMjKqiBDi/view?usp=sharing',
    '../images/JQuery.png',
    '',
    '',
    'https://drive.google.com/u/0/uc?id=1MbtyD3_AU9hFj55WAsQMZLhiMjKqiBDi&export=download'
  ),
  new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf'),
  new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf'),
  new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf'),
];
const back_end_books = [
  new Book_data(
    'front_end_books',
    'https://drive.google.com/file/d/1KDncaqzdZAW0ZSUDghhjmlvlnvsZLT7j/view?usp=sharing',
    '../images/pythonhardway.jpg',
    '',
    '',
    'https://drive.google.com/u/0/uc?id=1KDncaqzdZAW0ZSUDghhjmlvlnvsZLT7j&export=download'
  ),
  new Book_data(
    'front_end_books',
    'https://drive.google.com/file/d/1dTqJPLWJB-ZlhvexYAnoICvwWjKEgwTS/view?usp=sharing',
    '../images/pythonprogramming.jpg',
    '',
    '',
    'https://drive.google.com/u/0/uc?id=1dTqJPLWJB-ZlhvexYAnoICvwWjKEgwTS&export=download'
  ),
  new Book_data(
    'front_end_books',
    'https://drive.google.com/file/d/1coXi6bM6Mga6zHgVfntKF1zK2vihl-Ov/view?usp=sharing',
    '../images/Java.jpg',
    '',
    '',
    'https://drive.google.com/u/0/uc?id=1coXi6bM6Mga6zHgVfntKF1zK2vihl-Ov&export=download'
  ),
  new Book_data(
    'front_end_books',
    'https://drive.google.com/file/d/16rlzVDFOu3h8hXC6LAHhIT1zdu3vYVBl/view?usp=sharing',
    '../images/php.jpg',
    '',
    '',
    'https://drive.google.com/u/0/uc?id=16rlzVDFOu3h8hXC6LAHhIT1zdu3vYVBl&export=download'
  ),
  new Book_data(
    'front_end_books',
    'https://drive.google.com/file/d/13V7zBBAqPtG8R7IAjV-yJFGnIM35sv5x/view?usp=sharing',
    '../images/Net.jpg',
    '',
    '',
    'https://drive.google.com/u/0/uc?id=13V7zBBAqPtG8R7IAjV-yJFGnIM35sv5x&export=download'
  ),

  new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf'),
  new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf'),
  new Book_data('back_end_book', 5, '', '', '', '/pdf-folder/book1.pdf'),
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
  book_a.target = '_blank';
  book_img.src = front_end_books[i].image;
  span_button1.textContent = 'Read';
  span_button2.textContent = 'Download';
  span_a1.href = front_end_books[i].imgPath;
  span_a1.target = '_blank';
  span_a2.href = front_end_books[i].link;
  span_a2.target = '_blank';
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
  book_a.target = '_blank';
  span_button1.textContent = 'Read';
  span_button2.textContent = 'Download';
  span_a1.href = back_end_books[i].imgPath;
  span_a1.target = '_blank';
  span_a2.href = back_end_books[i].link;
}

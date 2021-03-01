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
  new Book_data('front_end_books', 'https://www.google.com', '../images/HTML5CSS3.JPG', '', '', 'http://download1594.mediafire.com/9aivyci7egog/g98232patobhbk8/HTML5+CSS3+For+The+Real+World+2nd+Edition.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/how-to-code-in-html.png', '', '', 'http://download1647.mediafire.com/jvtaqfpzxsag/s0rp9wca36i5om7/CodeHTML%26CSS.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/Bootstrap-A-SitePoint-Anthology-1.png', '', '', 'http://download943.mediafire.com/lqyvultvcmsg/ogt9teytxflwxcp/bootstrap-ant-1_compress.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/javascript.jpg', '', '', 'http://download1587.mediafire.com/8896j3lffqkg/p6ryrl8xrtn5w31/Learning+Three+Js+The+Javascri%27%2B%27pt+3d+Library+For+Web+Gl.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/JQuery.png', '', '', 'http://download1509.mediafire.com/ux36ojsvwtdg/wxr3vuoizfscw1h/Dominando+JavaScript+com+jQuery+Book+of+2012+Year.pdf')
  , new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf')
  , new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf')
  , new Book_data('front_end_books', 5, '', '', '', '/pdf-folder/book1.pdf')
];
const back_end_books = [
  new Book_data('front_end_books', 'https://www.google.com', '../images/pythonhardway.jpg', '', '', 'https://download1503.mediafire.com/3ot725cs88rg/fxlxksg556m6irf/Learn+Python+The+Hard+Way+3rd+Edition.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/pythonprogramming.jpg', '', '', 'https://download1503.mediafire.com/yvn5g90ojvpg/wmwg2yers1t894n/Python+Programming.++Python+Programming+for+Beginners%2C+Python+Programming+for+Intermediates+%28+PDFDrive+%29.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/Java.jpg', '', '', 'https://download1349.mediafire.com/4xk88zz6yesg/omdbdraebmulnmm/Java+for+Absolute+Beginners_+Learn+to+Program+the+Fundamentals+the+Java+9%2B+Way+%28+PDFDrive+%29.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/php.jpg', '', '', 'https://download1654.mediafire.com/bcodrvn7vl9g/4qfedd8g40sxk3b/Pro+PHP+and+jQuery%2C+2nd+Edition_+Take+your+dynamic+PHP+7+apps+to+the+next+level+by+adding+a+JavaScript+layer+using+jQuery+%28+PDFDrive+%29.pdf')
  , new Book_data('front_end_books', 'https://www.google.com', '../images/Net.jpg', '', '', 'https://download1507.mediafire.com/q0ehvdwr7yyg/ly59rvjqsf262lk/Applied+Cryptography+in+.NET+and+Azure+Key+Vault_+A+Practical+Guide+to+Encryption+in+.NET+and+.NET+Core+%28+PDFDrive+%29.pdf')

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
  span_button1.textContent = 'Description';
  span_button2.textContent = 'Download';
  span_a1.href = front_end_books[i].imgPath;
  span_a1.target = '_blank';
  span_a2.href = front_end_books[i].link;
  span_a2.target='_blank';
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
  span_button1.textContent = 'Description';
  span_button2.textContent = 'Download';
  span_button2.id='ahmed';
  span_a1.href = back_end_books[i].imgPath;
  span_a1.target = '_blank';
  span_a2.href = back_end_books[i].link;
}

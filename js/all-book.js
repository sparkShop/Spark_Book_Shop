'use strict'

'use strict'
// get element by id
const main_div =document.getElementById('all_book');

// Helper Function
function createRatingBar(container ,rate){
    const starts = document.createElement('img');
    const start_div = document.createElement('div');

    start_div.className="div3";
    start_div.appendChild(starts);
    container.appendChild(start_div);

    starts.src="/img/ratings"+rate+".png";
    starts.className="";
}


const book_array = front_end_books;

// fill books in div

for(let i=0;i<front_end_books.length;i++){

    // create Book card element --> 8 element
    const container = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('p');
    const div2 = document.createElement('div');
    const read_link = document.createElement('a');
    const download_link = document.createElement('a');
    const read = document.createElement('img');
    const download = document.createElement('img');


    // select class name to change Css style
    container.className="container_class";
    div2.className="div2";

    // Arrange the elements
    // main
    main_div.appendChild(container);
    container.appendChild(image);
    container.appendChild(title);
    container.appendChild(div2);
    // div
    div2.appendChild(read_link);
    div2.appendChild(download_link);
    // a tag
    read_link.appendChild(read);
    download_link.appendChild(download);
 

    // Define element properties
    image.src = front_end_books[i].image;
    title.textContent = front_end_books[i].name;
    read.src="./img/read.png";
    download.src="./img/cloud.png"
    // read and download links
    read_link.href= front_end_books[i].link;
    download_link.href=front_end_books[i].link;
    download_link.download = front_end_books[i].link;
    read_link.target="_blank";
    download_link.target="_blank";
    
    createRatingBar(container,front_end_books[i].rate);

}



localStorage.setItem('book_category','back_end_books');
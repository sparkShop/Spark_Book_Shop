'use strict'

for (let i=0;i<25;i++){
    const button_description = document.getElementById('bt_'+i);
    button_description.addEventListener('click',function (){
        localStorage.setItem('book_index' , i);
        document.location.href = '../details.html';
    })
}
// $(function(){
//     var $header = $('.header');
// $(window).scroll(function(){
//     if($(this).scrollTop() > 0){
//         $header.addClass('sticky');
//     }else{
//         $header.removeClass('sticky');
//     }
// });
// });


let header = document.querySelector('.header');
let hamburger = document.querySelector('.hamburger_btn');

window.addEventListener('scroll',function(){
    if(scrollY !== 0){
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    };
})

hamburger.addEventListener('click',function(){
    header.classList.toggle('open');
})


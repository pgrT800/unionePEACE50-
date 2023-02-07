$(document).ready(function(){
    $('.slider').slick({
        speed:1000,
        arrows:false,
        fade:true,
        border:false,
        lazyLoad: 'ondemand',
        autoplay:true,
    });
 });
 let bg = document.querySelector('.slider_item1');
 let bg1 = document.querySelector('.slider_item2');
 let bg2 = document.querySelector('.slider_item3');
 let bg3 = document.querySelector('.slider_item4');
 let bg4 = document.querySelector('.slider_item5');
 window.addEventListener('mousemove', function(e) {
     let x = e.clientX / window.innerWidth;
     let y = e.clientY / window.innerHeight;  
     bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
     bg1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
     bg2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
     bg3.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
     bg4.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
 });
 

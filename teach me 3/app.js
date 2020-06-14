const header = document.querySelector('.header');
const login = document.querySelector('.login-button');
const navbar = document.querySelector('.navbar');
const registerButton = document.querySelector('.register-button');
// const logo = document.querySelector('.logo');
// const pricing = document.getElementById('li1',);
// const courses = document.getElementById('li2',);
// const resources = document.getElementById('li3',);
// const contactUs = document.getElementById('li4',);
// const cart = document.querySelector('.fa-shopping-cart');

window.onscroll = function(){
    var top = window.scrollY;
    if(top >=100){
        header.style.backgroundColor = "#333"
        header.style.boxShadow = "0px 2px 3px 0 rgba(0,0,0,.1)"
        header.style.height = "70px"
        navbar.style.height = "70px"
        // login.style.color = "black" 
        // login.style.border = "1px solid black"
        login.style.height = "77%"
        registerButton.style.height = "80%"
        // logo.style.color = "black"
        // pricing.style.color = "black"
        // courses.style.color = "black"
        // resources.style.color = "black"
        // contactUs.style.color = "black"
        // cart.style.color = "black"

    }else{
        header.style.backgroundColor = "transparent"
        header.style.boxShadow = ""
        header.style.height = ""
        navbar.style.height = ""
        // login.style.color = "" 
        // login.style.border = ""
        login.style.height = ""
        registerButton.style.height = ""
        // logo.style.color = ""
        // pricing.style.color = ""
        // courses.style.color = ""
        // resources.style.color = ""
        // contactUs.style.color = ""
        // cart.style.color = ""
    }
};

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })
const slider = document.querySelector('.slider')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
var sectionIndex = 0;

right.addEventListener('click', function(){
    sectionIndex =(sectionIndex < 2) ? sectionIndex + 1 :2;
    slider.style.transform = 'translate(' + (sectionIndex)* -25 +'%)'
})

left.addEventListener('click', function(){
    sectionIndex =(sectionIndex > 0) ? sectionIndex - 1 :0;
    slider.style.transform = 'translate(' + (sectionIndex)* -25 +'%)'
})

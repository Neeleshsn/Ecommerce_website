// var MenuItem = document.querySelector(".MenuItem");
// var menuicon = document.querySelector(".menu-icon");
// var flag = 0;

// menuicon.addEventListener("click", function () {
//   if (flag == 0) {
//     MenuItem.style.maxHeight = "200px";
//     flag = 1;
//   } else {
//     MenuItem.style.maxHeight = "0px";
//     flag = 0;
//   }
// });

// -----------------------

// menuicon.addEventListener("click",)

// let MenuItem = document.querySelector('.MenuItem');

// document.querySelector('.menu-icon').oneclick = () => {
//   MenuItem.classList.toggle('active');
// }

// ------------------------------------


const menu_icon = document.querySelector('.menu-icon');
const menu = document.getElementById('MenuItem');

menu_icon.addEventListener('click', () => {
    menu.classList.toggle('active')
}) 
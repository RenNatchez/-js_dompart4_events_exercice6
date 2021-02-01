let div = document.querySelector('div')

// function target(e) {
//     console.log(e.target);
//     e.target.style.bor = '3px solid red';
// }

// div.addEventListener("click", target);{
// }

div.addEventListener('click',(e) => {
    console.log(e.target);
    e.target.style.border = '3px solid red';
} )



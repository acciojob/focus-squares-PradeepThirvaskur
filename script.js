let div1 = document.querySelector("#square1");
let div2 = document.querySelector("#square2");
let div3 = document.querySelector("#square3");

div1.addEventListener('mouseover', () => {
    div2.style.backgroundColor = '#6F4E37';
    div3.style.backgroundColor = '#6F4E37';
});
div1.addEventListener('mouseout', () => {
    div2.style.backgroundColor = '#E6E6FA';
    div3.style.backgroundColor = '#E6E6FA';
});

div2.addEventListener('mouseover', () => {
    div1.style.backgroundColor = '#6F4E37';
    div3.style.backgroundColor = '#6F4E37';
});
div2.addEventListener('mouseout', () => {
    div1.style.backgroundColor = '#E6E6FA';
    div3.style.backgroundColor = '#E6E6FA';
});


div3.addEventListener('mouseover', () => {
    div1.style.backgroundColor = '#6F4E37';
    div2.style.backgroundColor = '#6F4E37';
});
div3.addEventListener('mouseout', () => {
    div2.style.backgroundColor = '#E6E6FA';
    div1.style.backgroundColor = '#E6E6FA';
});
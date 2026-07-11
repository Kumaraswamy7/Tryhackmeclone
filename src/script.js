let menupage = document.querySelector(".menupage");
function showmenu() {
    menupage.style.display = 'block';
}

function closemenu() {
    menupage.style.display = 'none';
}

let expandsubmenu = document.querySelectorAll(".expand");

expandsubmenu.forEach((element, i) => {
    let arrowup = document.querySelectorAll(".arrow-up");
    let arrowdown = document.querySelectorAll(".arrow-down");
    let menudescexpand = document.querySelectorAll(".sub-content");
    element.addEventListener('click', (event) => {
        if (arrowdown[i].style.display === 'none') {
            menudescexpand[i].style.display = 'none';
            arrowdown[i].style.display = 'inline-block';
            arrowup[i].style.display = 'none';

        }
        else {
            menudescexpand[i].style.display = 'block';
            arrowup[i].style.display = 'inline-block';
            arrowdown[i].style.display = 'none';
        }
    });
});

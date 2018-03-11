
function toggleSideMenu(){
    let menulist = document.querySelectorAll(".menu-item");
    let submenulist = document.querySelectorAll(".sub-side-menu");

    for (let i = 0; i < menulist.length; i++) {
        menulist[i].addEventListener("click", function () {
            if (window.getComputedStyle(submenulist[i], 'style').display==='none') {
                submenulist[i].setAttribute('style', 'display:block');
            } else {
                submenulist[i].setAttribute('style', 'display:none');
            }
        });
    }
}

function hideCornerSearch(){  // hide and display corner search
    let icon = document.querySelector('#search-icon');
    let bar = document.querySelector('#corner-search');

    icon.addEventListener("click", function () {
        if (window.getComputedStyle(bar, 'style').display==='none') {
            bar.setAttribute('style', 'display:inline');
        } else {
            bar.setAttribute('style', 'display:none');
        }
    });
}

const category = ['genre', 'author', 'title', 'popular'];

 // add listeners to main menu
function handleMainMenuClick(){
    for(let i = 0; i < category.length; i++){
        let item = document.querySelector('.item-'+ i);
        item.addEventListener("click", () => {
            let allItems = document.querySelectorAll('.classification');
            let sideItem = document.querySelector('.c' + i);
            for(let j = 0; j < allItems.length; j++){
                allItems[j].setAttribute('style', 'display: none');
            }
            sideItem.setAttribute('style', 'display: block');
            console.log("click menu: " + category[i]);
        });
    }
}

handleMainMenuClick();
toggleSideMenu();
hideCornerSearch();



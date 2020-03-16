let menu = document.getElementsByClassName("menu__link");
let menuActive = document.getElementsByClassName("menu menu_sub");

for (let index = 0; index < menu.length; index++) {
    let element = menu[index];
    element.onclick = function () {
        if (element.parentElement.childNodes.item(3) != null) {
            if (element.parentElement.childNodes.item(3).classList.contains("menu_active")) {
                element.parentElement.childNodes.item(3).classList.remove("menu_active");
            } else {
                for (let index = 0; index < menuActive.length; index++) {
                    let element = menuActive[index];
                    element.classList.remove("menu_active");
                }
                element.parentElement.childNodes.item(3).classList.add("menu_active");
            }
        }
        return false;
    }
}
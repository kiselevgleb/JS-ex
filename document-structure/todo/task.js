let im = document.querySelector(".tasks__input");
let but = document.querySelector(".tasks__add");
let list = document.querySelector(".tasks__list");
let butClear;

but.onclick = function () {
    if (im.value != "") {
        list.insertAdjacentHTML("afterBegin", "<div class='task'><div class='task__title'></div><a href='#' class='task__remove'>&times;</a></div>");
        document.querySelector(".task__title").textContent = im.value;
        im.value = "";
    }
    butClear = document.querySelectorAll(".task__remove");
    butClear.forEach(element => {
        element.onclick = function () {
            element.parentElement.remove();
        }
    });
    return false;
}
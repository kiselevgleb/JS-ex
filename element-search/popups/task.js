let main = document.getElementById("modal_main");
let success = document.getElementById("modal_success");

let mas = document.getElementsByClassName("modal");
let masClose = document.getElementsByClassName("modal__close modal__close_times");

main.className = "modal modal_active";
// console.log(mas.length);
for (let index = 0; index < masClose.length; index++) {
    const element = masClose[index];
    element.onclick = function () {
        console.log(element.parentElement.parentElement.className);
        element.closest(".modal").className = "modal modal__close";
    }
}
document.getElementsByClassName("btn btn_danger modal__close show-success")[0].onclick = function () {
    mas[0].className = "modal modal__close";
    mas[1].className = "modal modal_active";
}
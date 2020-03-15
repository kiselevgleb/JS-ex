let dropdownList = document.querySelector(".dropdown__list");
let dropdownLinks = document.querySelectorAll(".dropdown__link");
let dropdownValue = document.querySelector(".dropdown__value")

function dropdownValueClick() {
    if (dropdownList.className == "dropdown__list") {
        dropdownList.className = "dropdown__list dropdown__list_active";
    } else {
        dropdownList.className = "dropdown__list";
    }
}
for (let index = 0; index < dropdownLinks.length; index++) {
    let element = dropdownLinks[index];
    element.onclick = function () {
        let text = dropdownValue.textContent;
        dropdownValue.textContent = element.textContent;
        console.log(dropdownList.parentElement.textContent);
        element.textContent = text;
        element.closest("ul").className = "dropdown__list";
        return false;
    }
}
dropdownList.parentElement.addEventListener("click", dropdownValueClick);
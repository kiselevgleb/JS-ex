let tabs = document.querySelectorAll(".tab");
let tabContents = document.querySelectorAll(".tab__content");
let arrTabs = Array.from(tabs);

tabs[0].parentElement.addEventListener("click", function (e) {
    Array.from(tabs).forEach(element => element.classList.remove("tab_active"));
    Array.from(tabContents).forEach(element => element.classList.remove("tab__content_active"));
    for (let index = 0; index < tabs.length; index++) {
        if (e.target.classList.contains("tab") && e.target == tabs[index]) {
            e.target.classList.add("tab_active");
            tabContents[index].classList.add("tab__content_active");
        }
    }
});
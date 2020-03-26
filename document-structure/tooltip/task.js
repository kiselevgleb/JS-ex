let title = document.querySelectorAll(".has-tooltip");
let titleTool = document.querySelector(".tooltip");

title.forEach(element => {
    element.onclick = function () {
        if (!titleTool.classList.contains("tooltip_active")) {
            titleTool.textContent = element.title;
            let coords = element.getBoundingClientRect();
            titleTool.style.left = coords.left + "px";
            titleTool.style.top = coords.bottom + "px";
            titleTool.classList.add("tooltip_active");
        } else {
            titleTool.classList.remove("tooltip_active");

        }
        return false;
    }
});
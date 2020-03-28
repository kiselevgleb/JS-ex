let title = document.querySelectorAll(".has-tooltip");
let titleTool = document.querySelector(".tooltip");
let titleText;
title.forEach(element => {
    element.onclick = function () {
        console.log(titleText);
        titleTool.classList.remove("tooltip_active");
        if (!titleTool.classList.contains("tooltip_active") && titleText != element.title) {
            titleTool.textContent = element.title;
            let coords = element.getBoundingClientRect();
            titleTool.style.left = coords.left + "px";
            titleTool.style.top = coords.bottom + "px";
            titleTool.classList.add("tooltip_active");
            titleText = element.title;
        } else if (titleText == element.title) {
            titleTool.classList.remove("tooltip_active");
            titleText=null;
        }
        
        return false;
    }
});
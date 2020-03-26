let title = document.querySelectorAll(".has-tooltip");
let titleTool = document.querySelector(".tooltip");

title.forEach(element => {
    element.onclick = function () {
            console.log(element.title);
            titleTool.textContent=element.title;
        titleTool.classList.add("tooltip_active");
        
    }
});
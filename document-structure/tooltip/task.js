let title = document.querySelectorAll(".has-tooltip");
let titleTool = document.querySelector(".tooltip");

title.forEach(element => {
    element.onclick = function () {
            console.log(element.title);
            titleTool.textContent=element.title;
            let coords = element.getBoundingClientRect();
            titleTool.style.left = coords.left + "px";
            titleTool.style.top = coords.bottom + "px";
          
        titleTool.classList.add("tooltip_active");
        
    }
});
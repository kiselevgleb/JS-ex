let reveal = document.querySelectorAll(".reveal");
console.log(reveal);
window.addEventListener("scroll", function () {
    for (let index = 0; index < reveal.length; index++) {
        const element = reveal[index];
        if(element.getBoundingClientRect().top<window.innerHeight ){
            element.classList.add("reveal_active");
        }
        else{
            element.classList.remove("reveal_active");
        } 
    }
});
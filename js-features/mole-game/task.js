let but = document.querySelectorAll(".hole");
let kill = document.getElementById("dead");
let lost = document.getElementById("lost");

console.log(but.length);
but.forEach(element => {
    element.onclick = function () {
        if(element.className.includes( 'hole_has-mole' )&&kill.textContent<9){
            kill.textContent= Number.parseInt(kill.textContent)+1;            
        }
        else if(!element.className.includes( 'hole_has-mole' )&&lost.textContent<4){
            lost.textContent = Number.parseInt(lost.textContent)+1;   
        }
        else if(!element.className.includes( 'hole_has-mole' )&&lost.textContent==4){
            lost.textContent = Number.parseInt(lost.textContent)+1;
            alert("Вы проиграли!"); 
        }
        else if(element.className.includes( 'hole_has-mole' )&&kill.textContent==9){
            kill.textContent= Number.parseInt(kill.textContent)+1;  
            alert("Победа!");
        }
    };

});
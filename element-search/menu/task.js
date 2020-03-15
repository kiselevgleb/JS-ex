let menu = document.getElementsByClassName("menu__link");
console.log(menu[1].parentElement.childNodes.item(3).className);

for (let index = 0; index < menu.length; index++) {
    let element = menu[index];
    element.onclick = function () {
        if(element.parentElement.childNodes.item(3)!=null){
            element.parentElement.childNodes.item(3).className="menu menu_sub menu_active";
        }
<<<<<<< HEAD
        return false; }
}

=======
    } 
    
}
>>>>>>> parent of 8f14496... Update task.js

let plus = document.querySelectorAll(".product__quantity-control_inc");
let minus = document.querySelectorAll(".product__quantity-control_dec");
let cart = document.querySelector(".cart__products");
let butCart = document.querySelectorAll(".product__add");

plus.forEach(element => {
    element.onclick = function () {
        console.log(element.previousSibling);
        element.previousElementSibling.textContent = Number.parseInt(element.previousElementSibling.textContent) + 1;
        return false;
    }
});

minus.forEach(element => {
    element.onclick = function () {
        if (Number.parseInt(element.nextElementSibling.textContent) > 1) {
            element.nextElementSibling.textContent = Number.parseInt(element.nextElementSibling.textContent) - 1;
        }
        return false;
    }
});

butCart.forEach(element => {
    element.onclick = function () {
        let imgNew = element.parentElement.parentElement.previousElementSibling.src;
        let coin = element.previousElementSibling.childNodes.item(3).textContent;
        let parent = element.parentElement.parentElement.parentElement.dataset.id;
        let num = 0
        if (cart.childNodes.length == 5) {
            cart.insertAdjacentHTML("afterBegin", "<div class='cart__product' data-id=''><img class='cart__product-image' src=><div class='cart__product-count'></div></div>");
            document.querySelector(".cart__product-image").src = imgNew;
            document.querySelector(".cart__product-count").textContent = coin;
            document.querySelector(".cart__product").dataset.id = parent;
        } else {
            for (let index = 0; index < cart.childNodes.length - 5; index++) {
                const element = cart.childNodes[index];
                if (element.dataset.id == parent) {
                    element.childNodes[1].textContent = Number.parseInt(element.childNodes[1].textContent) + Number.parseInt(coin);
                } else {
                    num++;
                }
            }
        }
        if (num == cart.childNodes.length - 5) {
            cart.insertAdjacentHTML("afterBegin", "<div class='cart__product' data-id=''><img class='cart__product-image' src=><div class='cart__product-count'></div></div>");
            document.querySelector(".cart__product-image").src = imgNew;
            document.querySelector(".cart__product-count").textContent = coin;
            document.querySelector(".cart__product").dataset.id = parent;
        }
        return false;
    }
});
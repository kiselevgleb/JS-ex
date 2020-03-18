let font = document.querySelectorAll(".font-size");
let book = document.querySelector(".book");
console.log(book);

console.log(font[0].parentElement);
console.log(font);

// font[0].parentElement.addEventListener("click", function (e) {
//     Array.from(font).forEach(element => element.classList.remove("font-size_active"));
//     console.log(e.target);
//     book.classList.add("book_fs-small");
//     e.target.classList.add("font-size_active");
// return false;
// });

for (let index = 0; index < font.length; index++) {
    let e = font[index];
    e.onclick = function () {
        Array.from(font).forEach(element => element.classList.remove("font-size_active"));
        console.log(e.target);
        if (e.classList.contains("font-size_small")) {
            book.classList.add("book_fs-small");
            book.classList.remove("book_fs-big");
            e.classList.add("font-size_active");
        } else if (e.classList.contains("font-size_big")) {
            book.classList.add("book_fs-big");
            e.classList.add("font-size_active");
            book.classList.remove("book_fs-small");

        }
        else if (!e.classList.contains("font-size_big")&&!e.classList.contains("font-size_small")) {
            book.classList.remove("book_fs-big");
            book.classList.remove("book_fs-small");
            e.classList.add("font-size_active");
        }
        return false;
    }
}
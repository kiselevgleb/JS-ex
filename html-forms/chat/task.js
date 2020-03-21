let openChat = document.querySelector(".chat-widget");
let mesInput = document.querySelector(".chat-widget__input");
let masMesAns = ["С новым годом", "С новым годом2", "С новым годом3"];
let coin = 0;
console.log(masMesAns);
openChat.addEventListener("click", function () {
    if (!openChat.classList.contains("chat-widget_active"))
        openChat.classList.add("chat-widget_active");
});
const messages = document.querySelector('.chat-widget__messages');

let mestext;
onInput = (e) => {
    mestext = e.target.value;
};
mesInput.addEventListener("input", onInput);
let date = new Date;
let min = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
let time = date.getHours() + ":" + min;

function pressEnter(e) {
    console.log(e.code);

    if (e.code == "Enter" && mestext != null) {

        messages.innerHTML += `
  <div class="message">
    <div class="message__time">11</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
  <div class="message">
  <div class="message__time">11</div>
  <div class="message__text">
    Добрый день, мы ещё не проснулись. Позвоните через 10 лет
  </div>
</div>`;
        let textMas = document.querySelectorAll(".message__text");
        let timeMas = document.querySelectorAll(".message__time");

        textMas[textMas.length - 2].innerHTML = mestext;
        textMas[textMas.length - 2].style.background = "red";
        timeMas[timeMas.length - 2].innerHTML = time;
        console.log(mestext);
        console.log(time);

        
        


        textMas[textMas.length - 1].innerHTML = masMesAns[coin];
        timeMas[timeMas.length - 1].innerHTML = time;
        if(coin==2){
            coin=0;
        }else{
        coin++;}
        mestext = null;
        mesInput.value = "";
    }
}

mesInput.addEventListener("keyup", pressEnter);
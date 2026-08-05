/* ===========================================
   Юлия & Виталий
   Wedding Invitation
===========================================*/

/* ===========================
      ПЕРСОНАЛЬНЫЕ ГОСТИ
=========================== */

const params = new URLSearchParams(window.location.search);

const guestKey = params.get("guest");

const guest = document.getElementById("guest");

if (guestKey && guests[guestKey]) {

    guest.innerHTML = guests[guestKey].name;

} else {

    guest.innerHTML = "Дорогие гости";

}

/* ===========================
          ТАЙМЕР
=========================== */

const weddingDate = new Date("2026-10-24T13:00:00");

function updateTimer(){

const now = new Date();

const diff = weddingDate - now;

if(diff <= 0){

document.getElementById("countdown").innerHTML=

"<h2>Сегодня наш счастливый день ❤️</h2>";

return;

}

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff/(1000*60*60))%24);

const minutes=Math.floor((diff/(1000*60))%60);

const seconds=Math.floor((diff/1000)%60);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

}

updateTimer();

setInterval(updateTimer,1000);

/* ===========================
          МУЗЫКА
=========================== */

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

if(playing){

music.pause();

musicBtn.innerHTML="♫";

}else{

music.play();

musicBtn.innerHTML="❚❚";

}

playing=!playing;

});

/* Первый клик запускает музыку */

document.body.addEventListener("click",()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="❚❚";

}

},{once:true});

/* ===========================
          ЛЕПЕСТКИ
=========================== */

const petalsContainer = document.querySelector(".petals");

function createPetal(){

    const petal = document.createElement("span");

    petal.innerHTML = "🌸";

    petal.style.left =
    Math.random() * 100 + "%";

    petal.style.animationDuration =
    (7 + Math.random() * 8) + "s";

    petal.style.animationDelay =
    Math.random() * 5 + "s";

    petal.style.fontSize =
    (15 + Math.random() * 20) + "px";

    petal.style.opacity =
    0.4 + Math.random() * 0.6;

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },15000);

}

setInterval(createPetal,450);

/* ===========================
    ПОЯВЛЕНИЕ БЛОКОВ
=========================== */

const animatedSections =
document.querySelectorAll(
"section"
);

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},
{

threshold:0.15

}
);

animatedSections.forEach(section=>{

section.classList.add(
"hidden"
);

observer.observe(section);

});

/* ===========================
        ПЛАВНАЯ ПРОКРУТКА
=========================== */

document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{

link.addEventListener(
"click",
function(e){

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* Анимация появления блоков */

.hidden{

opacity:0;

transform:
translateY(50px);

transition:
all 1s ease;

}

.show{

opacity:1;

transform:
translateY(0);

}

/* ===========================
      КОНВЕРТ / ЗАГРУЗКА
=========================== */

const loader = document.getElementById("loader");

if(loader){

setTimeout(()=>{

loader.classList.add("closed");

},5000);

}

/* ===========================
      ЗАЩИТА ОШИБОК
=========================== */

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

});

/* ===========================
      ПАРАЛЛАКС ЭФФЕКТ
=========================== */

const hero =
document.querySelector(".hero");

window.addEventListener(
"scroll",
()=>{

if(hero){

let offset =
window.pageYOffset;

hero.style.backgroundPositionY =
offset * 0.3 + "px";

}

});

/* ===========================
      КНОПКА МУЗЫКИ
      АНИМАЦИЯ
=========================== */

if(musicBtn){

musicBtn.addEventListener(
"mouseenter",
()=>{

musicBtn.style.transform =
"scale(1.1)";

});

musicBtn.addEventListener(
"mouseleave",
()=>{

musicBtn.style.transform =
"scale(1)";

});

}

/* ===========================
      ОТСЛЕЖИВАНИЕ
      КАСАНИЯ НА ТЕЛЕФОНЕ
=========================== */

let touched=false;

document.addEventListener(
"touchstart",
()=>{

if(!touched){

document.body.classList.add(
"touch"
);

touched=true;

}

});

/* ===========================
      ЗАПРЕТ СЛУЧАЙНОГО
      ВЫДЕЛЕНИЯ
=========================== */

document.addEventListener(
"selectstart",
(e)=>{

if(
e.target.tagName!=="INPUT" &&
e.target.tagName!=="TEXTAREA"
){

e.preventDefault();

}

});

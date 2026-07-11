// Birthday Countdown
const birthday = new Date("July 12, 2026 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "🎉 Happy Birthday Sathiya Akka ❤️";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}, 1000);


// ❤️ Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 300);


// 🎈 Balloons
const colors = [
    "#ff4d6d",
    "#ffbe0b",
    "#3a86ff",
    "#8338ec",
    "#06d6a0"
];

function createBalloon() {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left = Math.random() * 100 + "vw";

    balloon.style.background =
        colors[Math.floor(Math.random() * colors.length)];

    balloon.style.animationDuration =
        (8 + Math.random() * 5) + "s";

    document.getElementById("balloons").appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 13000);
}

setInterval(createBalloon, 1200);


// 🎁 Surprise Button
const wishBtn = document.getElementById("wishBtn");
const typing = document.getElementById("typing");

const text = `Dear Sathiya Akka,

Happy Birthday! 🎉

May God bless you with happiness,
good health, success and endless smiles.

Have a wonderful year ahead. ❤️`;

wishBtn.addEventListener("click", () => {

    document.getElementById("surprise").style.display = "block";

    typing.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        typing.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(timer);
        }

    }, 40);

});
const enterBtn = document.getElementById("enterBtn");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

mainContent.style.display = "none";

enterBtn.addEventListener("click", () => {

    welcome.style.display = "none";
    mainContent.style.display = "block";

    if (music) {
        music.play().catch(error => {
            console.log("Music could not play:", error);
        });
    }

}); const photos = [
    "/static/images/photo1.jpg",
    "/static/images/photo2.jpg",
    "/static/images/photo3.jpg",
    "/static/images/photo5.jpg"
];

let currentPhoto = 0;
const slideImage = document.getElementById("slideImage");

setInterval(() => {

    slideImage.style.opacity = "0";

    setTimeout(() => {

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        slideImage.src = photos[currentPhoto];
        slideImage.style.opacity = "1";

    }, 500);

}, 3000);
function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.getElementById("petals").appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 10000);

}

setInterval(createPetal, 500);
 const quotes = [
    "🌸 Keep Smiling Always 🌸",
    "💖 You Make Every Moment Beautiful 💖",
    "✨ Shine Bright Like Always ✨",
    "🎂 Wishing You Endless Happiness 🎂",
    "❤️ Stay Blessed Forever ❤️"
];

const quote = document.getElementById("quote");

let index = 0;

quote.innerHTML = quotes[index];

setInterval(() => {
    index = (index + 1) % quotes.length;
    quote.innerHTML = quotes[index];
}, 3000);
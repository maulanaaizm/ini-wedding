const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const song = document.querySelector("#song");
const audioIcon = document.querySelector(".audio-icon-wrapper i");

let isPlaying = false;

// function disableScroll() {
//   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

//   window.onscroll = function () {
//     window.scrollTo(scrollTop, scrollLeft);
//   };

//   rootElement.style.scrollBehavior = "auto";
// }

// function enableScroll() {
//   window.onscroll = function () {};
//   rootElement.style.scrollBehavior = "smooth";
//   navbar.style.display = "block";
//   // localStorage.setItem("opened", "true");

//   navbar();
// }

function playAudio() {
  // song.volume = 0.1;
  // audioIconWrapper.style.display = "flex";
  song.play();
  isPlaying = true;
}

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }

  isPlaying = !isPlaying;
};

// disableScroll();

const main = document.querySelector("#main");
const hero = document.querySelector("#hero");
const buka = document.querySelector("#buka");

buka.addEventListener("click", function () {
  main.style.display = "block";
  hero.style.display = "none";

  AOS.init();
  playAudio();
});

window.onscroll = function () {
  const home = document.querySelector("#home");
  const navbar = document.querySelector(".navbar");
  const fixedNav = home.offsetTop;

  if (window.pageYOffset > fixedNav) {
    navbar.classList.remove("hidden");
    navbar.classList.add("flex");
    audioIconWrapper.classList.remove("hidden");
    audioIconWrapper.classList.add("flex");
  } else {
    navbar.classList.remove("flex");
    navbar.classList.add("hidden");
    audioIconWrapper.classList.remove("flex");
    audioIconWrapper.classList.add("hidden");
  }
};

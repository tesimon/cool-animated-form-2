// const bgImage = document.getElementById("bgImage");

// const windowWidth = window.innerWidth;
// if (windowWidth === 720) {
//   bgImage.src = "./images/35452-1-robot-hd.png";
// }
// window.addEventListener("resize", function () {
//   const windowWidth = window.innerWidth;
//   const bgImage = document.getElementById("bgImage");
//   console.log(windowWidth);
//   if (windowWidth === 720) {
//     console.log("hello world");
//     return (bgImage.src = "./images/35452-1-robot-hd.png");
//   }
// });

setTimeout(() => {
  document.querySelector("form").classList.add("opacity-100");
}, 500);

const image = document.querySelector("img");
image.animate(
  [
    { transform: "translateX(-100%)", opacity: 0 },
    { transform: "translateX(0)", opacity: 1 },
  ],
  {
    duration: 1000,
    easing: "ease-in-out",
  }
);

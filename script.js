setTimeout(() => {
  document.querySelector("form").classList.add("opacity-100");
}, 500);
// setTimeout(() => {
//   document.querySelector("img").classList.remove("-translate-x-full");
//   document.querySelector("img").classList.add("opacity-100");
// }, 500);

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
// const form = document.querySelector("form");
// const hoverText = document.createElement("span");
// const div = document.getElementById("hello");
// hoverText.innerHTML = "Hello World";
// hoverText.classList.add(
//   "text-center",
//   "text-white",
//   "absolute",
//   "top-10",

//   "left-80",
//   "px-4",
//   "py-2",
//   "hidden",
//   "bg-purple-500",
//   "rounded-lg"
// );
// div.appendChild(hoverText);
// form.addEventListener("mouseenter", () => {
//   hoverText.style.display = "block";
// });
// form.addEventListener("mouseleave", () => {
//   hoverText.style.display = "none";
// });

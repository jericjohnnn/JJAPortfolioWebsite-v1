// const showMore = document.getElementById("showMore");
// const figure = document.querySelector(".figure"); // Use querySelector for single element

// showMore.addEventListener("click", () => {
//   figure.style.left = "-100%"; // Set left position to -100%
// });

// showMore.addEventListener("click", () => {
//     figure.classList.add("slide-left"); // Add a class with transition
//   });
// TODO IMITATE THE ANIMATION PROPERTY IN CSS WHERE ANIMATION IS INFINITE


function scroll_right() {
  var right = document.querySelector("#slider");
  const scrollAmount = slider.clientWidth * 1; // 100% of slider width
  right.scrollBy(scrollAmount, 0, "smooth");
}

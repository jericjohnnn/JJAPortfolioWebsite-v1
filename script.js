// const showMore = document.getElementById("showMore");
// const figure = document.querySelector(".figure"); // Use querySelector for single element

// showMore.addEventListener("click", () => {
//   figure.style.left = "-100%"; // Set left position to -100%
// });

// showMore.addEventListener("click", () => {
//     figure.classList.add("slide-left"); // Add a class with transition
//   });
// TODO IMITATE THE ANIMATION PROPERTY IN CSS WHERE ANIMATION IS INFINITE


// function scroll_right() {
//   var right = document.querySelector("#slider");
//   const scrollAmount = slider.clientWidth * 1; // 100% of slider width
//   // right.scrollBy(scrollAmount, 0, "smooth");
//   right.animate(
//     [

//     ],
//     {

//     }
//   );
// }


function scroll_right() {
  const slider = document.querySelector(".figure");
  const number = 100;
  // const scrollAmount = slider.clientWidth; // Get slider width
  
  if (number == 0) {
    slider.animate([
      { left: '0%' },  
      { left: '-100%' }  
    ], {
      duration: 1000,  // Animation duration in milliseconds
      easing: 'ease-in',  // Adjust easing as needed
      fill: "forwards",
    });
    number = 100;
  } else if (number == 100) {
    slider.animate([
      { left: '0%' },  
      { left: '-100%' }  
    ], {
      duration: 1000,  // Animation duration in milliseconds
      easing: 'ease-in',  // Adjust easing as needed
      fill: "forwards",
    });
    number = 200;
  } else if (number == 200) {
    slider.animate([
      { left: '0%' },  
      { left: '-100%' }  
    ], {
      duration: 1000,  // Animation duration in milliseconds
      easing: 'ease-in',  // Adjust easing as needed
      fill: "forwards",
    });
    number = 300;
  } else {
    slider.animate([
      { left: '0%' },  
      { left: '-100%' }  
    ], {
      duration: 1000,  // Animation duration in milliseconds
      easing: 'ease-in',  // Adjust easing as needed
      fill: "forwards",
    });
    number = 0;
  }
 
}

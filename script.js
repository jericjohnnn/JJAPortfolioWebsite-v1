// const showMore = document.getElementById("showMore");
// const figure = document.querySelector(".figure"); // Use querySelector for single element

// showMore.addEventListener("click", () => {
//   figure.style.left = "-100%"; // Set left position to -100%
// });

// showMore.addEventListener("click", () => {
//     figure.classList.add("slide-left"); // Add a class with transition
//   });
// TODO IMITATE THE ANIMATION PROPERTY IN CSS WHERE ANIMATION IS INFINITE

const showMore = document.getElementById("showMore");
const slider = document.querySelector(".figure");

showMore.addEventListener("click", () => {
  
    // slider.animate([
    //    { left: '-' + number1 + '%' },  
    //    { left: '-'+ number2 + '%' }  
    // ], {
    //   duration: 1000,  // Animation duration in milliseconds
    //   easing: 'ease-in',  // Adjust easing as needed
    //   fill: "forwards",
    // });

  });


// function scroll_right() {
//   const slider = document.querySelector(".figure");
//   let number1 = 0;
//   let number2 = 100;
//   // const scrollAmount = slider.clientWidth; // Get slider width
  
//     slider.animate([
//        { left: '-' + number1 + '%' },  
//     { left: '-'+ number2 + '%' }  
//     ], {
//       duration: 1000,  // Animation duration in milliseconds
//       easing: 'ease-in',  // Adjust easing as needed
//       fill: "forwards",
//     });
   
//     number1 = number1 + 100;
//    number2 = number2 + 100;
//     // { left: '-100%' },  
//     //   { left: '-200%' } 
// }

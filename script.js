// const showMore = document.getElementById("showMore");
// const figure = document.querySelector(".figure"); // Use querySelector for single element

// showMore.addEventListener("click", () => {
//     figure.classList.add("slide-left"); // Add a class with transition
//   });

const showMore = document.querySelector("#showMore");
const mySkills = document.querySelector("#mySkills");
const returnBack = document.querySelector("#returnBack");

showMore.addEventListener("click", () => {
  scroll_(0, 100);
});

mySkills.addEventListener("click", () => {
  scroll_(100, 200);
});

returnBack.addEventListener("click", () => {
  scroll_(200, 0);
});


function scroll_(firstValue, secondValue) {
  const slider = document.querySelector(".figure");

    slider.animate([
      { left: '-' + firstValue + '%' },  
      { left: '-' + secondValue +'%' } 
    ], {
      duration: 900,  // Animation duration in milliseconds
      easing: 'ease',  
      fill: "forwards",
    });
   
}


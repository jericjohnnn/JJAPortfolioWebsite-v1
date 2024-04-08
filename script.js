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

  slider.animate(
    [{ left: "-" + firstValue + "%" }, { left: "-" + secondValue + "%" }],
    {
      duration: 750, // Animation duration in milliseconds
      easing: "ease",
      fill: "forwards",
    }
  );
}

const webdevbtn = document.querySelector(".webdevbtn"); // webdev button
const gfxbtn = document.querySelector(".gfxbtn"); //gfx button

const gfxholder = document.querySelector(".graphicContentHolder"); // whole gfx container
const webdevholder = document.querySelector(".webContentHolder"); // whole webdev holder

const myworksholder = document.querySelector(".myworksHolder"); // whole gfx and webdev holder combined

const myworkslbl = document.querySelector(".myworkslbl"); // myworks h2 label


// TODO WORK ON FUNCTION TO TURN TO BE CLICKABLE AND NOT CLICKABLE

  gfxbtn.onclick = function () {
    gfxholder.style.display = "flex";
    webdevholder.style.display = "none";
    webdevbtn.classList.toggle("devbtn");
    gfxbtn.classList.toggle("gdbtn");
    myworksholder.classList.toggle("mwholder");
    myworkslbl.classList.toggle("mwlbl2");
  };

  webdevbtn.onclick = function () {
    gfxholder.style.display = "none";
    webdevholder.style.display = "flex";
    webdevbtn.classList.toggle("devbtn");
    gfxbtn.classList.toggle("gdbtn");
    myworksholder.classList.toggle("mwholder");
    myworkslbl.classList.toggle("mwlbl2");

  };


// webdevbtn.onclick = function(){
//   gfxholder.style.display = "none";
//   webdevholder.style.display = "flex";
//   webdevbtn.classList.toggle("devbtn");
//   gfxbtn.classList.toggle("gdbtn");
//   myworksholder.classList.toggle("mwholder");
//   myworkslbl.classList.toggle("mwlbl2");
// }
// gfxbtn.onclick = function(){
//   gfxholder.style.display = "flex";
//   webdevholder.style.display = "none";
//   webdevbtn.classList.toggle("devbtn");
//   gfxbtn.classList.toggle("gdbtn");
//   myworksholder.classList.toggle("mwholder");
//   myworkslbl.classList.toggle("mwlbl2");
// }

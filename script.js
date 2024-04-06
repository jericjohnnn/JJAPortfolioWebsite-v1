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
      duration: 750,  // Animation duration in milliseconds
      easing: 'ease',  
      fill: "forwards",
    });
   
}


const webdevbtn = document.querySelector(".webdevbtn");
const gfxbtn = document.querySelector(".gfxbtn");

const gfxholder = document.querySelector(".graphicContentHolder");
const webdevholder = document.querySelector(".webContentHolder");

const myworksholder = document.querySelector(".myworksHolder");

const myworkslbl = document.querySelector(".myworkslbl");

const output = document.querySelector(".output");
const mwbutton = document.querySelector(".mwbutton");

let webstate = 1;
let gfxstate = 0;


let activeBtn = gfxbtn; // Set gfxbtn as initially active

function showContent(btn) {
  if (btn === activeBtn) return; // Prevent clicking the same button

  activeBtn.classList.remove("active");
  btn.classList.add("active");

  contentHolders.forEach(holder => holder.classList.remove("active"));
  document.getElementById(btn.id + "holder").classList.add("active");

  activeBtn = btn; // Update the activeBtn reference
}





function isActive(){
  if (webstate == 1) {
    webdevbtn.style.cursor = "default";
    gfxbtn.onclick = function(){
    gfxholder.style.display = "flex";
    webdevholder.style.display = "none";
    webdevbtn.classList.toggle("devbtn");
    gfxbtn.classList.toggle("gdbtn");
    myworksholder.classList.toggle("mwholder");
    myworkslbl.classList.toggle("mwlbl2");
  
    output.textContent = gfxstate;
    gfxstate = 1;
    webstate = 0;
  }
  }else if(gfxstate == 1){
    gfxbtn.style.cursor = "default";
  
    webdevbtn.onclick = function(){
    gfxholder.style.display = "none";
    webdevholder.style.display = "flex";
    webdevbtn.classList.toggle("devbtn");
    gfxbtn.classList.toggle("gdbtn");
    myworksholder.classList.toggle("mwholder");
    myworkslbl.classList.toggle("mwlbl2");
    gfxstate = 0;
    webstate = 1;
  }
  }
}

isActive();




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



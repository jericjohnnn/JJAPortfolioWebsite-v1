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

let webdev = 1;
let gfx = 0;

function opengfx(){
  gfxholder.style.display = "flex";
    webdevholder.style.display = "none";
    webdevbtn.classList.toggle("devbtn");
    gfxbtn.classList.toggle("gdbtn");
    myworksholder.classList.toggle("mwholder");
    myworkslbl.classList.toggle("mwlbl2");
    webdev = 0;
    gfx = 1;
    removelistener();
}

function openwebdev(){
  gfxholder.style.display = "none";
    webdevholder.style.display = "flex";
    webdevbtn.classList.toggle("devbtn");
    gfxbtn.classList.toggle("gdbtn");
    myworksholder.classList.toggle("mwholder");
    myworkslbl.classList.toggle("mwlbl2");
    webdev = 1;
    gfx = 0;
    removelistener();
}

function removelistener() {
  if (webdev == 1) {
    webdevbtn.removeEventListener("click", openwebdev);
    gfxbtn.addEventListener("click", opengfx);
    webdevbtn.style.cursor = "default";
    gfxbtn.style.cursor = "pointer";
  }else if(gfx == 1){
    gfxbtn.removeEventListener("click", opengfx);
    webdevbtn.addEventListener("click", openwebdev);
    gfxbtn.style.cursor = "default";
    webdevbtn.style.cursor = "pointer";
  }
}

removelistener();


// TODO: FIND A WAY TO MAKE THE IMAGE GALLERY SELCTION MINIMAL

const openimg = document.querySelector(".openimg");

const imgone = document.querySelector(".img-one");
// const closeModal = document.querySelector(".close-button");


openimg.onclick = function () {
  imgone.showModal();
};
opentwo.onclick = function () {
  imgtwo.showModal();
};
openthree.onclick = function () {
  imgthree.showModal();
};
openfour.onclick = function () {
  imgfour.showModal();
};



// openone.addEventListener("click", () => {
//   modal.showModal();
// });


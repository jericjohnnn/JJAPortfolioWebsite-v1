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

let webdev = 0;
let gfx = 1;

function opengfx() {
  gfxholder.style.display = "flex";
  webdevholder.style.display = "none";
  myworksholder.classList.toggle("mwholder");
  myworkslbl.classList.toggle("mwlbl2");
  webdev = 0;
  gfx = 1;
  removelistener();
}

function openwebdev() {
  gfxholder.style.display = "none";
  webdevholder.style.display = "flex";
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
  } else if (gfx == 1) {
    gfxbtn.removeEventListener("click", opengfx);
    webdevbtn.addEventListener("click", openwebdev);
    gfxbtn.style.cursor = "default";
    webdevbtn.style.cursor = "pointer";
  }
}

removelistener();

const modalimg = document.querySelector(".imgmodal img");

document.querySelectorAll(".gallery img").forEach((openimg) => {
  openimg.onclick = () => {
    
    modalimg.src = openimg.getAttribute("src");

    if (openimg.id == "img1" || openimg.id == "img5" || openimg.id == "img6" || openimg.id == "img7" || openimg.id == "img9"
    || openimg.id == "img10" || openimg.id == "img11" || openimg.id == "img14") {
      modalimg.style.height = "85%";
      modalimg.style.width = "fit-content";
    } else if(openimg.id == "img4" || openimg.id == "img8" || openimg.id == "img12"){
      modalimg.style.height = "auto";
      modalimg.style.width = "69%";
    }else{
      modalimg.style.height = "73%";
      modalimg.style.width = "auto";
    }

    document.querySelector(".imgmodal").style.display = 'flex';
    document.querySelector(".imgmodal span").style.display = 'flex';
  }
});
document.querySelector(".imgmodal span").onclick = () => {
  document.querySelector(".imgmodal").style.display = 'none';
  document.querySelector(".imgmodal span").style.display = 'none';
}



list = document.querySelector(".list");
closebtn = document.querySelector(".closebtn");
menu = document.querySelector(".menu");
list_item = document.querySelectorAll(".list a");

list_item.forEach((item) => {
  item.onclick = () => {
    list.style.right = "-100%";
  }
});
menu.addEventListener("click", () => {
  list.style.right = "0";
});

closebtn.addEventListener("click", () => {
  list.style.right = "-100%";
});


const contact_btn = document.querySelector(".contact-btn");

contact_btn.addEventListener("click", function() {
  alert("CTA still in the works, you can try to contact me through my socials, email or number :D");
});

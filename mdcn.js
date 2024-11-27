//Active Nav menu style
/*
const menu = document.getElementById("menu");
const list = menu.getElementsByTagName("a");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", " ");
    this.className += "active";
  });
}
*/

/*
======================================== 
Nav toggle for MOBILE SCREEN
========================================
*/

// select button and links
const toggleBtn = document.getElementById("nav-toggle");
const lowerNavContainer = document.getElementById("lower-list");
// // add event listener
toggleBtn.addEventListener("click", () => {
  lowerNavContainer.classList.toggle("show-links");
});

/*
======================================== 
Sticky navbar for Biggest Screen
========================================
*/

// Get the navbar
var lowerNavbar = document.querySelector(".lower-nav");
var scrollText = document.querySelector("#latest-scroll-news-section");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 1) {
    lowerNavbar.classList.add("sticky");
    scrollText.classList.add("stickytest");
  } else {
    lowerNavbar.classList.remove("sticky");
    scrollText.classList.remove("stickytest");
  }
});

//slider style
const backgroundImages = [
  {
    text: "MDCN Headquarters, Plot 1102, Cadastral Zone B 11, Off Oladipo Diya Road, Kaura District, Abuja, FCT",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/mdcn-house-full.png')",
  },

  {
    text: "Prof. Afolabi Lesi, Chairman, Medical and Dental Council of Nigeria",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/chairman.jpg')",
  },

  {
    text: "Dr. Fatima Kyari, Registrar/CEO, Medical and Dental Council of Nigeria",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/registrar01.png')",
  },

  {
    text: "maintains the register of persons licencsed to practice medicine, dentistry and alternative-medicine in nigeria",
    image: "url('/images/registrar02.jpg')",
  },
  {
    text: "MDCN Management Team",
    image: "url('/images/management.jpg')",
  },
  {
    text: "Cross-section of MDCN Management Team with stakeholders",
    image: "url('/images/management3.jpg')",
  },

  {
    text: "REGISTRAR/CEO WITH Cross-section of MDCN Staff",
    image: "url('/images/staff.jpg')",
  },
  {
    text: "MDCN Staff with stakeholders at a Strategic meeting",
    image: "url('/images/staff2.jpeg')",
  },
  {
    text: "Determining the standard of knowledge and training of persons to practice as doctors and dentists",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/council-meeting.jpg')",
  },

  {
    text: "",
    image:
      " linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/nma-meeting-calabar.jpg')",
  },
  {
    text: "administering oath of practice on newly graduated doctors and dentists in nigeria",
    image: "url('/images/induction.jpg')",
  },
  {
    text: "licencing persons qualified to practice medicine, dentistry and alternative medicine in Nigeria",
    image: "url('/images/practicing.jpg')",
  },

  {
    text: "Local Organizing Committee (LOC) for the AMCOA 2025 Workshop in Nigeria to be hosted by the MDCN",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/AMCOA.jpeg')",
  },
  {
    text: "MDCN OUTREACH AT THE 65TH NATIONAL COUNCIL ON HEALTH MEETING",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/NCH.jpg')",
  },
  {
    text: "MDCN OUTREACH AT THE 65TH NATIONAL COUNCIL ON HEALTH MEETING",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/NCH2.jpeg')",
  },

  {
    text: "AMCOA 2025 Workshop LOC",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/AMCOA2.jpeg')",
  },
  {
    text: "AMCOA 2025 Workshop LOC",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/AMCOA3.jpeg')",
  },
  {
    text: "AMCOA 2025 Workshop LOC",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/AMCOA4.jpeg')",
  },
  {
    text: "AMCOA 2025 Workshop LOC",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/AMCOA5.jpeg')",
  },
  {
    text: "AMCOA 2025 Workshop LOC",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/AMCOA6B.jpg')",
  },
  {
    text: "AMCOA 2025 Workshop LOC",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/AMCOA7.jpeg')",
  },
  {
    text: " AMCOA 2025 Workshop LOC",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/AMCOA8.jpeg')",
  },
  {
    text: "AMCOA 2025 Workshop LOC",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/AMCOA9.jpeg')",
  },
  {
    text: "REGISTRAR/CEO, MDCN WITH PARTNERS",
    image:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/partners.jpg')",
  },

  {
    text: "REGISTRAR/CEO, MDCN WITH DIGNITARIES FROM THE UNIVERISITY OF ABUJA",
    image: "url('/images/uath-visit.jpg')",
  },
  {
    text: "REGISTRAR/CEO, MDCN  WITH DIGNITARIES FROM THE NATIONAL UNIVERISITY COMMISSION",
    image:
      " linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/nuc-visit.jpg')",
  },
];

let img = 0;
let txt = 0;

function slideImages() {
  // backgroundImages[img].image.style.objectFit = "contain";
  if (img < backgroundImages.length) {
    const backgroundPhoto = document.getElementById("slider-img");
    const backgroundText = document.getElementById("slider-text");
    backgroundPhoto.style.backgroundImage = backgroundImages[img].image;
    backgroundPhoto.style.boxShadow = "4px 2px 4px 4px rgba(0, 0, 0, 0.4)";
    backgroundText.innerHTML = backgroundImages[img].text;
    backgroundText.style.animation = "ease-in";
    img++;
    if (img === backgroundImages.length) {
      img = 0;
      return;
    }
  }
}
setInterval(slideImages, 5000);

function animateText() {}

/*
//testing active class
const show = document.getElementById("menu").textContent;
console.log(show);

const edu = document.getElementById("edu");
function active() {
  edu.style.display.backgroundColor = green;
}

*/

const active = document.getElementsByClassName("active").classList.add("now");

console.log(active);

//active.classList.add(now);

/*
======================================== 
Read more style
========================================
*/
function readMoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

/*
======================================== 
Copy Right Date
========================================
*/
// select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// =========================================
// Createing a resposive navbar component
// =========================================

let  moble_nav = document.querySelector(".mobile-navbar-btn");
let  header = document.querySelector(".header");

moble_nav.addEventListener("click", () =>{
  header.classList.toggle("active")
})



// =========================================
// Createing a portfolio tabbed component
// =========================================

const p_btns = document.querySelector(".p-btns"); // select the element with class "p-btns"
const p_btn = document.querySelectorAll(".p-btn"); // select all elements with class "p-btn"
const p_imge_elem = document.querySelectorAll(".image-overlay"); // select all elements with class "image-overlay"

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target; // get the clicked target
  console.log(p_btn_clicked); // log the clicked button

  // Remove active class from all buttons
  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

  // Add active class to the clicked button
  p_btn_clicked.classList.add("p-btn-active");

  // Get the number from the data attribute
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  // Select images with the corresponding button number
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  // Add not-active class to all images
  p_imge_elem.forEach((curElem) => curElem.classList.add("p-imge-not-active"));

  // Remove not-active class from the active images
  img_active.forEach((curElem) => curElem.classList.remove("p-imge-not-active"));
});



  // <!-- Initialize Swiper Star -->
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
      delay:2500,
    },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // myJsmedia function.
const myJsmedia = (media) => {
  if (media.matches) {
    // If media query matches (max-width: 800px)
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  } else {
    // If media query does not match
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3, // Example of more slides for larger screens
      spaceBetween: 30,
    });
  }
};


  // Correct matchMedia typo
const media = window.matchMedia("(max-width: 780px)");

// Call listener function at the run time
myJsmedia(media); // Call the listener function

// Attach listener function on state change
media.addEventListener("change", myJsmedia);





// <!-- Initialize Swiper Ends -->

// scrool to top buttom starat.
const heroSection = document.querySelector(".Section-hero")

const footer = document.querySelector(".section-footer")

const scroolElement = document.createElement("div");
scroolElement.classList.add("scrollTop-style");

scroolElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footer.after(scroolElement);

const scrolltop =  () =>{
  heroSection.scrollIntoView({behavior:"smooth"});
};

scroolElement.addEventListener("click",scrolltop);

// scrool to top buttom End.


// Work Section Animate Start.

const conterNum = document.querySelectorAll(".Counter-number");
const speed = 200;

conterNum.forEach((curElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    const intialNumber = parseInt(curElem.innerText);

    // Calculate the increment value
    const incrementNumber = Math.trunc(targetNumber / speed);

    // Update the number only if the current value is less than the target
    if (intialNumber < targetNumber) {
      curElem.innerText = `${Math.min(intialNumber + incrementNumber, targetNumber)}+`;
      setTimeout(updateNumber, 10);
    } else {
      curElem.innerText = targetNumber; // Set it to the exact target number when finished
    }
  };
  updateNumber();
});

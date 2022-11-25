// image changer
let images = [
  "images/img-2.png",
  "images/about-img2.png",
  "images/about-img3.png",
  "images/about-img4.png",
  "images/about-img5.png",
];
let index = 0;
const imgElement = document.getElementById("img-loop");
function change() {
  imgElement.src = images[index];
  index >= images.length - 1 ? (index = 0) : index++;
}

window.onload = function () {
  setInterval(change, 550);
  sayHello();
};
// carousel phases
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    767: {
      items: 2,
    },
    991: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
});

// Accordion
const acc = document.querySelectorAll(".accordion-btn");
acc.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.classList.contains("is-open")) {
      ele.classList.remove("is-open");
    } else {
      const accWithIsOpen = document.querySelectorAll(".is-open");
      accWithIsOpen.forEach((eleWithIsOpen) => {
        eleWithIsOpen.classList.remove("is-open");
      });
      ele.classList.add("is-open");
    }
  });
});

// Scroll Nav Change Color
let nav = document.getElementById("nav");
function navScroll() {
  if (window.scrollY > 150) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
}
window.addEventListener(`scroll`, navScroll);
// Menu Mobile Open & Close
$("#menu-btn").on("click", function () {
  $("#mobile-menu").show();
});
$("#close-menu , #close-over-lay").on("click", function () {
  $("#mobile-menu").hide();
});

// Scroll To Top
let goTop = document.querySelector(".go-top");
window.onscroll = function () {
  this.scrollY >= 400
    ? goTop.classList.add("show")
    : goTop.classList.remove("show");
};

goTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Loading Screen
function sayHello() {
  $(".loading .sk-folding-cube").fadeOut(3000, function () {
    $(this)
      .parent()
      .fadeOut(500, function () {
        $("body").css("overflow", "auto");
        $(this).remove();
      });
  });
}

// Stop F12
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    return false;
  }
});
document.addEventListener("contextmenu", (event) => event.preventDefault());

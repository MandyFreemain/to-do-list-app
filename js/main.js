
















var menuButton = document.querySelector(".js-menu-control");
var menu = document.querySelector(".menu");
var menuCloseButton = document.querySelector(".menu-close");
var allDatesButton = document.querySelector(".all-dates-button");
var tourInnerAllDates = document.querySelector(".tour-inner-all-dates");

function handleBurgerMenuClick () {
  if (menu.classList.contains("menu-hidden")) {
    menu.classList.remove("menu-hidden");
  } else {
    menu.classList.add("menu-hidden");
  }
}

function handleViewAllDatesClick () {
  if (tourInnerAllDates.classList.contains("tour-inner-hidden")) {
    tourInnerAllDates.classList.remove("tour-inner-hidden");
  } else {
    tourInnerAllDates.classList.add("tour-inner-hidden");
  }
}

menuButton.addEventListener('click', handleBurgerMenuClick)
menuCloseButton.addEventListener('click', handleBurgerMenuClick)
allDatesButton.addEventListener('click', handleViewAllDatesClick)




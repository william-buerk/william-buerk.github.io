let currentSectionNumber = -1;

// Smoothly scrolls to the info section by element index
function goToSection(sectionNumber) {
  currentSectionNumber = sectionNumber;
  let section = document.getElementsByClassName("info-section")[sectionNumber];
  let header = document.getElementsByClassName("header")[0];

  let currentScrollPosition = window.scrollY;
  let sectionTop = section.getBoundingClientRect().top;
  let headerHeight = header.getBoundingClientRect().height;
  let marginHeight = 20;

  // console.log(section);

  window.scrollTo({
    top: currentScrollPosition + sectionTop - headerHeight - marginHeight,
    behavior: "smooth"
  });
}

// Smoothly scroll to the next info section with arrow keys
function goToNextSection() {
  let numberOfSections = document.getElementsByClassName("info-section").length;

  currentSectionNumber = (currentSectionNumber + 1) % numberOfSections;

  goToSection(currentSectionNumber);
}

// Smoothly scroll to the previous info section with arrow keys
function goToPreviousSection() {
  let numberOfSections = document.getElementsByClassName("info-section").length;

  if (currentSectionNumber > 0) {
    currentSectionNumber = (currentSectionNumber - 1) % numberOfSections;
  } else {
    currentSectionNumber = numberOfSections - 1;
  }

  console.log(currentSectionNumber);

  goToSection(currentSectionNumber);
}

/*
* Accordions
*/


//Expands and collapses accordions
function toggleAccordion(accordion) {
  let accordionList = accordion.querySelector(".info-section__list");
  accordion.classList.toggle("info-section--expanded");

  if (accordionList.style.maxHeight) {
    accordionList.style.maxHeight = null;
    accordion.ariaExpanded = "false";
  } else {
    accordionList.style.maxHeight = accordionList.scrollHeight + "px";
    accordion.ariaExpanded = "true";
  }
}

// Sets up event listens for accordions
function setup() {
  let accordions = document.getElementsByClassName("info-section--accordion");

  for (let i = 0; i < accordions.length; i++) {
    let currentAccordion = accordions[i];
    let accordionButton = currentAccordion.querySelector(
      ".info-section__button"
    );
    accordionButton.addEventListener("click", () => {
      toggleAccordion(currentAccordion);
    });
  }
}

window.addEventListener("load", setup);

// ========= Qualifications ==========
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

  
tabs.foreach((tab) => {
  tab.addEventListener("click", () => {
   
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });

    target.classList.add("qualification-active");

    tab.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });

    tab.classList.remove("qualification-active");
  });
});

// function accordion() {
//   let itemClass = this.parentNode.className;
//   for (e of tabContent) {
//     e.className = "qualifications-content";
//   }
//   if (itemClass === "qualifications-content") {
//     itemClass = "qualifications-content qualifications-active";
//   }
// }

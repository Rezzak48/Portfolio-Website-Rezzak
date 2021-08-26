/*========== SKILLS ==========*/
const skillsContent = document.querySelectorAll(".skills-content");
const skillsHeader = document.querySelectorAll(".skills-header");

// for each click
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i of skillsContent) {
    i.className = "skills-content skills-close";
  }

  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}

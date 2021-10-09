let tabs = document.querySelectorAll(".qualifications-tabs div");
tabsArray = Array.from(tabs);
let contents = document.querySelectorAll(".qualifications-sections div");
contentArray = Array.from(contents);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    //remove active class from all elements
    tabsArray.forEach((ele) => {
      ele.classList.remove("qualification-active");
    });

    //add active class to the current target
    e.currentTarget.classList.add("qualification-active");
    console.log(e.currentTarget);

    //remove all content
    contentArray.forEach((ele) => {
      ele.classList.remove("qualification-active");
    });

    //display content related to the active tab and edit on it
    console.log(e.currentTarget.dataset.cont);

    document
      .querySelector(e.currentTarget.dataset.cont)
      .classList.add("qualification-active");
  });
});

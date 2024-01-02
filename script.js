document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const expanded = question.getAttribute("aria-expanded") === "true";
    question.setAttribute("aria-expanded", !expanded);
    const answer = question.nextElementSibling;
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");

    if (expanded) {
      answer.style.maxHeight = 0;
      plusIcon.classList.remove("hide");
      minusIcon.classList.add("hide");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      plusIcon.classList.add("hide");
      minusIcon.classList.remove("hide");
    }
  });
});

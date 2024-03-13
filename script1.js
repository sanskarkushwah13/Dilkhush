const floatingButton = document.getElementById("floating-button");
const contactInfo = document.querySelector(".contact-info");

floatingButton.addEventListener("click", () => {
  floatingButton.classList.toggle("inactive");
  contactInfo.classList.toggle("active");
});

const allButton = document.querySelector(".button-menu");
const homePageCtn = document.querySelector(".home");
const profilePageCtn = document.querySelector(".profile");
const contactPageCtn = document.querySelector(".contact");

profilePageCtn.classList.add("hide");
contactPageCtn.classList.add("hide");
console.log(homePageCtn);
console.log(profilePageCtn);
console.log(contactPageCtn);

allButton.addEventListener("click", (e) => {
  console.log(e.target.textContent);
  if (e.target.textContent === "Home") {
    allButton.children[0].classList.add("button-bg");
    if (
      allButton.children[1].classList.contains("button-bg") ||
      allButton.children[2].classList.contains("button-bg")
    ) {
      allButton.children[1].classList.remove("button-bg");
      allButton.children[2].classList.remove("button-bg");
    }
    profilePageCtn.classList.add("hide");
        homePageCtn.classList.remove("hide");
        contactPageCtn.classList.add("hide")

  } else if (e.target.textContent === "Profile") {
    allButton.children[1].classList.add("button-bg");
    if (
      allButton.children[0].classList.contains("button-bg") ||
      allButton.children[2].classList.contains("button-bg")
    ) {
      allButton.children[0].classList.remove("button-bg");
      allButton.children[2].classList.remove("button-bg");
    }
    profilePageCtn.classList.remove("hide");
        homePageCtn.classList.add("hide");
        contactPageCtn.classList.add("hide");
  } else if (e.target.textContent === "Contact") {
    allButton.children[2].classList.add("button-bg");
    if (
      allButton.children[1].classList.contains("button-bg") ||
      allButton.children[0].classList.contains("button-bg")
    ) {
      allButton.children[1].classList.remove("button-bg");
      allButton.children[0].classList.remove("button-bg");
    }
    contactPageCtn.classList.remove("hide");
        profilePageCtn.classList.add("hide");
        homePageCtn.classList.add("hide");
  }
});

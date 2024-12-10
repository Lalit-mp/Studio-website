const allButton = document.querySelector(".button-menu");
const homePageCtn = document.querySelector(".home");
const profilePageCtn = document.querySelector(".profile");
const contactPageCtn = document.querySelector(".contact");
allButton.addEventListener("click",(e)=>{
    // console.log(e.target.textContent);
    const homePage= allButton.children[0];
    const profilePage= allButton.children[1];
    const contactPage= allButton.children[2];
    if(e.target.textContent === "Home"){
        profilePageCtn.classList.add("hide");
        contactPageCtn.classList.add("hide");

        homePage.classList.add("button-bg")
        profilePage.classList.remove("button-bg")
        contactPage.classList.remove("button-bg")
        console.log("i am home")
    } else if(e.target.textContent === "Profile"){
        homePageCtn.classList.add("hide");
        profilePageCtn.classList.add("show");
        // contactPageCtn.classList.add("show");

        profilePage.classList.add("button-bg")
        homePage.classList.remove("button-bg")
        contactPage.classList.remove("button-bg")
        console.log("i am Profile")
    } else if(e.target.textContent === "Contact"){
        homePageCtn.classList.add("hide");
        profilePageCtn.classList.add("hide");
        contactPageCtn.classList.add("show");

        const contactPage= allButton.children[2];
        profilePage.classList.remove("button-bg")
        homePage.classList.remove("button-bg")
        contactPage.classList.add("button-bg")
        console.log("i am Contact")
    } else{
        profilePageCtn.classList.add("hide");
        contactPageCtn.classList.add("hide");

        homePage.classList.add("button-bg")
        profilePage.classList.remove("button-bg")
        contactPage.classList.remove("button-bg")
        console.log("i am home")
    }
})
// console.log(homeButton);

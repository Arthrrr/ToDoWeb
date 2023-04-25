const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon-password");
links = document.querySelectorAll(".link");

    pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwField = eyeIcon.previousElementSibling;

        if (pwField.type === "password") {
        pwField.type = "text";
        eyeIcon.classList.replace("bxs-hide", "bxs-show");
        } else {
        pwField.type = "password";
        eyeIcon.classList.replace("bxs-show", "bxs-hide");
        }
    });
    });
 
links.forEach(link => {
    link.addEventListener("click", e =>{
        e.preventDefault(); 
        forms.classList.toggle("show-signup");
    })
})
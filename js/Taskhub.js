//Sirve para seleccionar elementos específicos del documento HTML y asignarlos a variables en JavaScript, lo que permite manipularlos o interactuar con ellos a través de código
const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon-password"),
      links = document.querySelectorAll(".link");

      pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
          let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
      
          pwFields.forEach(password => {
            if (password.type === "password") {
              password.type = "text";
              eyeIcon.classList.replace("bxs-hide", "bxs-show");
            } else {
              password.type = "password";
              eyeIcon.classList.replace("bxs-show", "bxs-hide");
            }
          });
        });
      });




links.forEach(link => {
    link.addEventListener("click", e =>{
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
})
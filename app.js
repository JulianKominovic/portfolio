const mountainParallax = document.querySelector(".bg-parallax-mountain");
const shapesParallax = document.querySelector(".bg-parallax-shapes");

const title = document.querySelector(".header-fixed");

const projectOne = document.getElementById("project-one");
const projectOneLanding = document.querySelector(".project-one-landing");
const projectOneText = document.querySelector(".project-one-text");
const projectOneLogo = document.querySelector(".project-one-logo");
const projectOneButton = document.querySelector(".project-one-button");
const projectOneOpenSlider = document.getElementById("project-one-open-slider");
const projectOneCarrousel = document.querySelector(".project-carrousel");
const projectOneSlide = document.querySelector(".project-one-slide");

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

const handleParallax = () => {
  let value = window.scrollY;
  shapesParallax.style.left = value * 0.5 + "px";
  mountainParallax.style.top = value * 0.6 + "px";
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      window.addEventListener("scroll", handleParallax);
    } else {
      window.removeEventListener("scroll", handleParallax);
    }
  });
};

let observer = new IntersectionObserver(observerCallback, options);
observer.observe(mountainParallax);

//NAV MENU
const mobileNavBar = document.querySelector(".mobile-navbar");
const hamburgerButtonClose = document.querySelector(".hamburger-button-open");
const hamburgerButtonOpen = document.querySelector(".hamburger-button");
const mobileNavbarItems = document.querySelector(".nav__bar-link-navigation");
const mobileCvItem = document.querySelector("cv-link-container");
hamburgerButtonClose.addEventListener("click", () => {
  mobileNavBar.style.right = "-220vw";
});
hamburgerButtonOpen.addEventListener("click", () => {
  mobileNavBar.style.transition = "ease 0.4s right";

  mobileNavBar.style.right = "-10vw";
});
console.log(mobileNavBar.children[1].childNodes);
mobileNavBar.children[1].childNodes.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNavBar.style.right = "-220vw";
  });
});

// SLIDER PROJECT ONE START
const sliderProjectOne = document.querySelector(".project-one-slide");
const sliderClose = document.querySelector(".project-one-close");
const sliderContent = document.querySelector(".project-one-content");
const sliderRight = document.querySelector(".project-one-right");
const sliderLeft = document.querySelector(".project-one-left");
const projectOneSlides = [
  `<div class="slide-one">
<h1 class="project-one-title">Calendario</h1>
<p class="project-desc">
  La grilla con todos los dias a simple vista, como si fuera un
  calendario fisico.
  <br />
  Ambientado con imagenes de fondo agradables, segun la epoca del año.
</p>
</div>
<a href="./assets/projects/simple-calendar-summer.png">
<img
src="./assets/projects/simple-calendar-summer.png"
alt="simple calendar verano"
srcset=""
class="img-cover"
/>
</a>

`,
  `<div class="slide-one">
<h1 class="project-one-title">Agregando tareas</h1>
<ul class="project-slide-list">
<li class="project-slide-list-item">Al tocar cualquier dia, podes agregar tareas nuevas.</li>
<li class="project-slide-list-item">El listado se encuentra alojado en el <b>LocalStorage</b> del navegador, lo que significa que tus datos estan guardados localmente.</li>
<li class="project-slide-list-item">No necesitaras registrarte para usar la aplicacion, y cuando gustes podes borrar todos los datos.</li>
</ul>
</div>
<a href="./assets/projects/simple-calendar-addtask.png">
<img
src="./assets/projects/simple-calendar-addtask.png"
alt="simple calendar agregar tarea"
srcset=""
class="img-cover"
/></a>
<a href="./assets/projects/simple-calendar-addtask2.png">
<img
src="./assets/projects/simple-calendar-addtask2.png"
alt="simple calendar agregar tarea"
srcset=""
class="img-cover"
/></a>
`,
  `<div class="slide-one">
<h1 class="project-one-title">Edita tus tareas</h1>
<ul class="project-slide-list">
<li class="project-slide-list-item">Introdujiste algun dato erroneo al momento de crear la tarea? No hay drama, <b>podes editarlas en cualquier momento</b>.</li>
</ul>
</div>
<a href="./assets/projects/simple-calendar-taskedit.png">
<img
src="./assets/projects/simple-calendar-taskedit.png"
alt="simple calendar editar tarea"
srcset=""
class="img-cover"
/></a>`,
  `<div class="slide-one">
<h1 class="project-one-title">¿Te interesa saber mas?</h1>
<ul class="project-slide-list">
<li class="project-slide-list-item">Podes ir al link del proyecto en <a href="https://github.com/JulianKominovic/react-calendar" target="_blank" rel="noopener noreferrer"><b>Github</b></a> por aca </li>
<li class="project-slide-list-item"><a href="https://jk-simple-calendar.netlify.app/" target="_blank" rel="noopener noreferrer"><b>O quizas quieras probar o... descargar el calendario a tu telefono 😏</b></a></li>
</ul>
</div>`,
];
let currentPage = 0;
const slidesColor = ["#726A95", "#4682B4", "#FB5B5A", "#AF0404"];

const refreshSlide = () => {
  sliderContent.innerHTML = DOMPurify.sanitize(projectOneSlides[currentPage]);
  sliderContent.style.backgroundColor = slidesColor[currentPage];
  currentPage === 0
    ? (sliderLeft.style.display = "none")
    : (sliderLeft.style.display = "block");
  currentPage === projectOneSlides.length - 1
    ? (sliderRight.style.display = "none")
    : (sliderRight.style.display = "block");
};

projectOneOpenSlider.addEventListener("click", () => {
  sliderProjectOne.style.left = 0;
  sliderProjectOne.style.transition = "left 0.5s";
  currentPage = 0;
  refreshSlide();
});
sliderClose.addEventListener("click", () => {
  sliderProjectOne.style.left = "-200vw";
  if (sliderProjectOne.style.left === 0) {
    sliderProjectOne.style.transition = "";
  }
});
sliderLeft.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    refreshSlide();
  }
});
sliderRight.addEventListener("click", () => {
  if (currentPage < projectOneSlides.length) {
    currentPage++;
    refreshSlide();
  }
});

let initX, endX;
const handleSlidesSwipe = () => {
  if (initX - endX > 40) {
    if (currentPage < projectOneSlides.length) {
      currentPage++;
      refreshSlide();
    }
  }
  if (initX - endX < -40) {
    if (currentPage > 0) {
      currentPage--;
      refreshSlide();
    }
  }
};

projectOneSlide.addEventListener("touchstart", (event) => {
  initX = event.touches[0].clientX;
});
projectOneSlide.addEventListener("touchend", (event) => {
  endX = event.changedTouches[0].clientX;
  handleSlidesSwipe();
});

// SLIDER PROJECT ONE END

// EMAIL FORM
const contactForm = document.querySelector(".contact-form");

const submitSuccess = () => {};

const VERIFICATION_ERRORS = {
  minLengthName: "El contenido del nombre es muy corto.",
  minLengthComment: "El contenido del cometario es muy corto.",
  empty: "Escribe algo...",
  mailBadFormat: "Escribe bien el email. Ejemplo: usuario@gmail.com",
  saySomething:
    "El campo comentarios esta vacio. Contame un poco que andas necesitando.",
  nameOnlyLetters: "El nombre solo admite letras normales",
};
const formVerifyName = (string) => {
  const textFormat = /^[A-Za-z]+$/;
  if (string.length < 4) return VERIFICATION_ERRORS.minLengthName;

  if (!string.match(textFormat)) return VERIFICATION_ERRORS.nameOnlyLetters;

  if (string.length === 0 || string.trim() === " ")
    return VERIFICATION_ERRORS.empty;

  return "";
};

const formVerifyComments = (string) => {
  if (string.length < 4) return VERIFICATION_ERRORS.minLengthComment;
  if (string.length === 0 || string.trim() === " ")
    return VERIFICATION_ERRORS.saySomething;
  return "";
};

const formVerifyEmail = (string) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (string.length < 4) return VERIFICATION_ERRORS.mailBadFormat;
  if (!string.match(mailFormat)) return VERIFICATION_ERRORS.mailBadFormat;
  return "";
};

const runVerification = (event) => {
  const inputName = event.target[0].value;
  const inputMail = event.target[1].value;
  const inputMessage = event.target[2].value;

  let error = "";
  const stepOne = formVerifyComments(inputMessage);
  const stepTwo = formVerifyEmail(inputMail);
  const stepThree = formVerifyName(inputName);
  if (stepThree !== "") return stepThree;
  if (stepTwo !== "") return stepTwo;
  if (stepOne !== "") return stepOne;

  return error;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const error = runVerification(event);
  if (error === "") {
    fetch("https://formsubmit.co/ajax/juliankominovic@gmail.com", {
      method: "POST",
      body: JSON.stringify({
        name: event.target[0].value,
        mail: event.target[1].value,
        message: event.target[2].value,
        _template: "table",
        _subject: "Mail desde el portfolio!",
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "aplication/json",
      },
    })
      .then(() => {})
      .catch((e) => console.error(e));
    console.log("enviado");
  } else {
    alert(error);
  }
};

contactForm.addEventListener("submit", handleSubmit);

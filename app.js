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

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

const handleParallax = () => {
  let value = window.scrollY;
  shapesParallax.style.left = value * 0.25 + "px";
  shapesParallax.style.transform = `rotateX(${value * 0.02}deg)`;
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
<a href="./assets/projects/simple-calendar-winter.png">
<img
src="./assets/projects/simple-calendar-winter.png"
alt="simple calendar verano"
srcset=""
class="img-cover"
/></a>
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
// SLIDER PROJECT ONE END

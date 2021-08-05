const mountainParallax=document.querySelector(".bg-parallax-mountain"),shapesParallax=document.querySelector(".bg-parallax-shapes"),title=document.querySelector(".header-fixed"),projectOne=document.getElementById("project-one"),projectOneLanding=document.querySelector(".project-one-landing"),projectOneText=document.querySelector(".project-one-text"),projectOneLogo=document.querySelector(".project-one-logo"),projectOneButton=document.querySelector(".project-one-button"),projectOneOpenSlider=document.getElementById("project-one-open-slider"),projectOneCarrousel=document.querySelector(".project-carrousel"),projectOneSlide=document.querySelector(".project-one-slide");let options={root:null,rootMargin:"0px",threshold:.7};const handleParallax=()=>{let a=window.scrollY;shapesParallax.style.left=a*.5+"px",mountainParallax.style.top=a*.6+"px"},observerCallback=(a,b)=>{a.forEach(a=>{a.isIntersecting?window.addEventListener("scroll",handleParallax):window.removeEventListener("scroll",handleParallax)})};let observer=new IntersectionObserver(observerCallback,options);observer.observe(mountainParallax);const mobileNavBar=document.querySelector(".mobile-navbar"),hamburgerButtonClose=document.querySelector(".hamburger-button-open"),hamburgerButtonOpen=document.querySelector(".hamburger-button"),mobileNavbarItems=document.querySelector(".nav__bar-link-navigation"),mobileCvItem=document.querySelector("cv-link-container");hamburgerButtonClose.addEventListener("click",()=>{mobileNavBar.style.right="-220vw"}),hamburgerButtonOpen.addEventListener("click",()=>{mobileNavBar.style.transition="ease 0.4s right",mobileNavBar.style.right="-10vw"}),mobileNavBar.children[1].childNodes.forEach(a=>{a.addEventListener("click",()=>{mobileNavBar.style.right="-220vw"})});const sliderProjectOne=document.querySelector(".project-one-slide"),sliderClose=document.querySelector(".project-one-close"),sliderContent=document.querySelector(".project-one-content"),sliderRight=document.querySelector(".project-one-right"),sliderLeft=document.querySelector(".project-one-left"),projectOneSlides=[`<div class="slide-one">
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

`,`<div class="slide-one">
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
`,`<div class="slide-one">
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
/></a>`,`<div class="slide-one">
<h1 class="project-one-title">¿Te interesa saber mas?</h1>
<ul class="project-slide-list">
<li class="project-slide-list-item">Podes ir al link del proyecto en <a href="https://github.com/JulianKominovic/react-calendar" target="_blank" rel="noopener noreferrer"><b>Github</b></a> por aca </li>
<li class="project-slide-list-item"><a href="https://jk-simple-calendar.netlify.app/" target="_blank" rel="noopener noreferrer"><b>O quizas quieras probar o... descargar el calendario a tu telefono 😏</b></a></li>
</ul>
</div>`];let currentPage=0;const slidesColor=["#726A95","#4682B4","#FB5B5A","#AF0404"],refreshSlide=()=>{sliderContent.innerHTML=DOMPurify.sanitize(projectOneSlides[currentPage]),sliderContent.style.backgroundColor=slidesColor[currentPage],currentPage===0?sliderLeft.style.display="none":sliderLeft.style.display="block",currentPage===projectOneSlides.length-1?sliderRight.style.display="none":sliderRight.style.display="block"};projectOneOpenSlider.addEventListener("click",()=>{sliderProjectOne.style.left=0,sliderProjectOne.style.transition="left 0.5s",currentPage=0,refreshSlide()}),sliderClose.addEventListener("click",()=>{sliderProjectOne.style.left="-200vw",sliderProjectOne.style.left===0&&(sliderProjectOne.style.transition="")}),sliderLeft.addEventListener("click",()=>{currentPage>0&&(currentPage--,refreshSlide())}),sliderRight.addEventListener("click",()=>{currentPage<projectOneSlides.length&&(currentPage++,refreshSlide())});let initX,endX;const handleSlidesSwipe=()=>{const a=40;initX-endX>a&&currentPage<projectOneSlides.length-1&&(currentPage++,refreshSlide()),initX-endX<-a&&currentPage>0&&(currentPage--,refreshSlide())};projectOneSlide.addEventListener("touchstart",a=>{initX=a.touches[0].clientX}),projectOneSlide.addEventListener("touchend",a=>{endX=a.changedTouches[0].clientX,handleSlidesSwipe()});const contactForm=document.querySelector(".contact-form"),submitSuccess=()=>{},VERIFICATION_ERRORS={minLengthName:"El contenido del nombre es muy corto.",minLengthComment:"El contenido del cometario es muy corto.",empty:"Escribe algo...",mailBadFormat:"Escribe bien el email. Ejemplo: usuario@gmail.com",saySomething:"El campo comentarios esta vacio. Contame un poco que andas necesitando.",nameOnlyLetters:"El nombre solo admite letras normales"},formVerifyName=a=>{const b=/^[A-Za-z]+$/;return a.length<4?VERIFICATION_ERRORS.minLengthName:a.match(b)?a.length===0||a.trim()===" "?VERIFICATION_ERRORS.empty:"":VERIFICATION_ERRORS.nameOnlyLetters},formVerifyComments=a=>a.length<4?VERIFICATION_ERRORS.minLengthComment:a.length===0||a.trim()===" "?VERIFICATION_ERRORS.saySomething:"",formVerifyEmail=a=>{const b=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;return a.length<4?VERIFICATION_ERRORS.mailBadFormat:a.match(b)?"":VERIFICATION_ERRORS.mailBadFormat},runVerification=a=>{const h=a.target[0].value,e=a.target[1].value,f=a.target[2].value;let g="";const c=formVerifyComments(f),d=formVerifyEmail(e),b=formVerifyName(h);return b!==""?b:d!==""?d:c!==""?c:g},handleSubmit=a=>{a.preventDefault();const b=runVerification(a);b===""?fetch("https://formsubmit.co/ajax/juliankominovic@gmail.com",{method:"POST",body:JSON.stringify({name:a.target[0].value,mail:a.target[1].value,message:a.target[2].value,_template:"table",_subject:"Mail desde el portfolio!"}),headers:{"Content-Type":"application/json",Accept:"aplication/json"}}).then(()=>{}).catch(a=>console.error(a)):alert(b)};contactForm.addEventListener("submit",handleSubmit)
/*  TAB */
const tabs = document.querySelectorAll(".tab")
const wrapper = document.querySelector(".tabTextWrapper")

let currentText = document.querySelector(".tabText")
let currentIndex = 0

tabs.forEach((tab,index)=>{

tab.addEventListener("click",()=>{

if(index === currentIndex) return

tabs.forEach(t=>t.classList.remove("active"))
tab.classList.add("active")

const newContent = tab.dataset.text

const newText = document.createElement("p")
newText.className="tabText"
newText.innerText=newContent

wrapper.appendChild(newText)


/* DEFINIR DIREÇÃO */

let direction

if(index > currentIndex){

direction="right"

/* novo vem da direita */

newText.style.transform="translateX(100%)"

}else{

direction="left"

/* novo vem da esquerda */

newText.style.transform="translateX(-100%)"

}


/* ANIMAÇÃO */

requestAnimationFrame(()=>{

newText.style.transform="translateX(0)"

if(direction==="right"){

currentText.style.transform="translateX(-100%)"

}else{

currentText.style.transform="translateX(100%)"

}

})


/* LIMPAR */

setTimeout(()=>{

currentText.remove()

currentText=newText

currentIndex=index

},550)

})

})

/* ============================================================= */


/* MENU MOBILE */

const menuBtn = document.getElementById("menuBtn")
const mobileNav = document.getElementById("mobileNav")
const closeMenu = document.getElementById("closeMenu")

menuBtn.addEventListener("click",()=>{

mobileNav.classList.add("open")

})

closeMenu.addEventListener("click",()=>{

mobileNav.classList.remove("open")

})



/* FECHAR MENU AO CLICAR */

document.querySelectorAll(".mobileNav a").forEach(link=>{

link.addEventListener("click",()=>{

mobileNav.classList.remove("open")
menuBtn.src="img/iconMenu.png"
aberto=false

})

})



/* SCROLL SPY + NAVEGAÇÃO */

const sections = document.querySelectorAll("section")

const navLinks = document.querySelectorAll(".sideItem")
const mobileLinks = document.querySelectorAll(".mobileNav a")

function atualizarMenu(){

let current=""

sections.forEach(section=>{

const top = section.offsetTop - 200

if(scrollY >= top){

current = section.getAttribute("id")

}

})


navLinks.forEach(link=>{

link.classList.remove("active")

if(link.getAttribute("href")==="#"+current){

link.classList.add("active")

}

})


mobileLinks.forEach(link=>{

link.classList.remove("active")

if(link.getAttribute("href")==="#"+current){

link.classList.add("active")

}

})

}

window.addEventListener("scroll",atualizarMenu)
atualizarMenu()


/* NAVEGAÇÃO MENU DESKTOP + MOBILE */

document.querySelectorAll('.sideItem, .circle').forEach(link=>{

link.addEventListener('click',function(e){

e.preventDefault()

const id = this.getAttribute('href')

const target = document.querySelector(id)

window.scrollTo({

top: target.offsetTop,
behavior: "smooth"

})

})

})
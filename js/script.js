/*====================================================
MENU MOBILE
====================================================*/

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
    mobileNav.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    mobileNav.classList.remove("open");
});


/*====================================================
MENU ATIVO PELO CLIQUE
====================================================*/

const navLinks = document.querySelectorAll(".navLink");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/*====================================================
REMOVER ATIVO APÓS CHEGAR NA SEÇÃO E NOVO SCROLL
====================================================*/

let menuScroll = false;
let scrollEndTimer;


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // marca que o scroll foi causado pelo clique
        menuScroll = true;


        // espera o scroll suave terminar
        clearTimeout(scrollEndTimer);

        scrollEndTimer = setTimeout(() => {

            menuScroll = false;

        }, 1000);

    });

});


window.addEventListener("scroll", () => {

    // ignora o scroll suave causado pelo menu
    if (menuScroll) return;


    // remove no primeiro scroll manual após chegar na seção
    navLinks.forEach(link => {
        link.classList.remove("active");
    });

});

/*====================================================
FECHAR MENU MOBILE
====================================================*/

document.querySelectorAll(".mobileItem").forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("open");

    });

});


/*====================================================
SCROLL SUAVE
====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href === "#") return;

        const target = document.querySelector(href);

        if (!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop,

            behavior: "smooth"

        });

    });

});


/*====================================================
HEADER AO ROLAR
====================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*====================================================
Scroll ao recaregar página (ponto de inicio)
====================================================*/

history.scrollRestoration = "manual";

window.addEventListener("load", () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });

});

/*====================================================
BOTÃO VOLTAR AO TOPO
====================================================*/

const backToTop = document.getElementById("backToTop");
const projetos = document.getElementById("projetos");

window.addEventListener("scroll", () => {

    const inicioProjetos = projetos.offsetTop;

    if (window.scrollY >= inicioProjetos) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
const theworldEl = document.querySelector(".theworld");
const navbarEl = document.querySelector("nav");
const btnaboutEl = document.querySelector(".btnabout");
const aboutEl = document.querySelector(".about-me");
const btnskillEl = document.querySelector(".btnskill");
const skillEl = document.querySelector(".skill");
const mainEl = document.querySelector("#container");
const toggleEl = document.querySelector(".toggle");
const bogEl = document.querySelector(".bog");
const btnqualEl = document.querySelector(".btnqual");
const qualEl = document.querySelector(".qual");
const btnexpEl = document.querySelector(".btncv");
const btncontactEl = document.querySelector(".btncontact");
const contactEl = document.querySelector(".contact");
const expEl = document.querySelector(".cv");

function checkcookie() {
    if (localStorage.getItem("toggleVar") === null) {
        localStorage.setItem("toggleVar", "0");
    } else {
        toggleVar = localStorage.getItem("toggleVar")
    }
    if (toggleVar == 1) {
        theworldEl.style.display = "none";
        bogEl.classList.add('bactive');
        toggleEl.classList.add('tactive');
    } else {
        theworldEl.style.display = "flex";
        bogEl.classList.remove('bactive');
        toggleEl.classList.remove('tactive');
    }
}

function pageload() {
    checkcookie();
    toggleEl.addEventListener("click", () => {
        if (toggleVar == 1) {
            localStorage.setItem("toggleVar", "0");
            checkcookie();
        } else if (toggleVar == 0) {
            localStorage.setItem("toggleVar", "1");
            checkcookie();
        }
    });

    btnaboutEl.addEventListener("click", () => {
        aboutEl.style.display = "block";
        btnaboutEl.classList.add('btnactive');
        skillEl.style.display = "none";
        btnskillEl.classList.remove('btnactive');
        qualEl.style.display = "none";
        btnqualEl.classList.remove('btnactive');        
        expEl.style.display = "none";
        btnexpEl.classList.remove('btnactive');        
        contactEl.style.display = "none";
        btncontactEl.classList.remove('btnactive');
    });

    btnskillEl.addEventListener("click", () => {
        skillEl.style.display = "block";
        btnskillEl.classList.add('btnactive');
        aboutEl.style.display = "none";
        btnaboutEl.classList.remove('btnactive');        
        qualEl.style.display = "none";
        btnqualEl.classList.remove('btnactive');               
        expEl.style.display = "none";
        btnexpEl.classList.remove('btnactive');        
        contactEl.style.display = "none";
        btncontactEl.classList.remove('btnactive');
    });

    btnqualEl.addEventListener("click", () => {        
        qualEl.style.display = "block";
        btnqualEl.classList.add('btnactive');
        skillEl.style.display = "none";
        btnskillEl.classList.remove('btnactive');
        aboutEl.style.display = "none";
        btnaboutEl.classList.remove('btnactive');               
        expEl.style.display = "none";
        btnexpEl.classList.remove('btnactive');        
        contactEl.style.display = "none";
        btncontactEl.classList.remove('btnactive');
    });

    btnexpEl.addEventListener("click", () => {        
        expEl.style.display = "block";
        btnexpEl.classList.add('btnactive');
        skillEl.style.display = "none";
        btnskillEl.classList.remove('btnactive');
        aboutEl.style.display = "none";
        btnaboutEl.classList.remove('btnactive');               
        qualEl.style.display = "none";
        btnqualEl.classList.remove('btnactive');        
        contactEl.style.display = "none";
        btncontactEl.classList.remove('btnactive');
    });

    btncontactEl.addEventListener("click", () => {        
        contactEl.style.display = "block";
        btncontactEl.classList.add('btnactive');
        skillEl.style.display = "none";
        btnskillEl.classList.remove('btnactive');
        aboutEl.style.display = "none";
        btnaboutEl.classList.remove('btnactive');               
        expEl.style.display = "none";
        btnexpEl.classList.remove('btnactive');        
        qualEl.style.display = "none";
        btnqualEl.classList.remove('btnactive');
    });
    
}

window.onload = pageload();

if (localStorage.getItem("toggleVar") === null) {
    localStorage.setItem("toggleVar", "0");
} else {
    toggleVar = localStorage.getItem("toggleVar");
}
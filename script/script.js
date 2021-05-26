// --- SMOOTH SCROLL --- //

(function () {
    let target = document.querySelectorAll('span[href^="#"]');
    for (a=0; a<target.length; a++) {
       target[a].onclick = function (e) {
          let hash = this.getAttribute("href");
          let elem = document.getElementById(hash.replace("#",""));
          elem.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
          e.preventDefault();
        }
    }
    })();

// --- GET LANGUAGE BUTTONS --- //

const eng_button = document.getElementById('btn-eng');
const de_button = document.getElementById('btn-de');

eng_button.addEventListener('click', function(){localStorage.setItem('sandroLanguage', 'english');languageHandling(english);}, false);
de_button.addEventListener('click', function(){localStorage.setItem('sandroLanguage', 'german');languageHandling(german);}, false);

// --- LANGUAGE FUNCTION + INSERTION --- //

function languageHandling(x){
let localStore = localStorage.getItem('sandroLanguage');

const ticks = document.getElementsByClassName('language-tick');
const textarea = document.getElementById('message');

if(localStore === null || localStore === 'english' || x === english){
    localStorage.setItem('sandroLanguage', 'english');
    $(ticks[0]).css({'color' : 'green', 'right' : '20px', 'opacity' : '0.7'});
    $(ticks[1]).css({'right' : '0px', 'opacity' : '0'});
    eng_button.style.opacity = "1";
    eng_button.style.filter = "grayscale(0%)";
    de_button.style.opacity = ".2";
    de_button.style.filter = "grayscale(100%)";
    textarea.placeholder = "Message";
    insertContent(english);
}
else if(localStore === 'german' || x === german){
    $(ticks[0]).css({'right' : '0px', 'opacity' : '0'});
    $(ticks[1]).css({'color' : 'green', 'right' : '20px', 'opacity' : '0.7'});
    eng_button.style.opacity = ".2";
    eng_button.style.filter = "grayscale(100%)";
    de_button.style.opacity = "1";
    de_button.style.filter = "grayscale(0%)";
    textarea.placeholder = "Nachricht";
    insertContent(german);
}

function insertContent(i){
    let targetElements = document.getElementsByClassName('language-switch');

    for(a = 0; a < targetElements.length; a++){
        targetElements[a].textContent = Object.values(i)[a];
    }
}
}

languageHandling();

// ---------------------------------------------------------------------------- //
// --- NAVIGATION TOGGLE --- //
const navbar = document.getElementById('side-nav');
const toggler = document.getElementById('toggle-icon');
let navOpen = false;

toggler.addEventListener('click',function(){

    if (navOpen === false){
        toggler.style.opacity = "0";
        navbar.style.right = "0px";
        setTimeout('toggler.innerHTML = "&#10005;"; toggler.style.opacity = "1";',220);
        navOpen = true;
    }
    else if (navOpen === true){
        toggler.style.opacity = "0";
        navbar.style.right = "-150px";
        setTimeout('toggler.innerHTML = "&#9780;"; toggler.style.opacity = "1";',220);
        navOpen = false;
    }

});

// ---------------------------------------------------------------------------- //
// --- PROJECTS HANDLING --- //

let buttons = document.querySelectorAll('.more-info');
buttons.forEach((btn) => { btn.addEventListener("click", (event) => { showInfo(btn.getAttribute('data')); }); });

function showInfo(x){
    let project = eval(x);
    let modalTargets = document.getElementsByClassName('modal-insert');
    let githubLink = document.getElementById('project-github');
    let liveLink = document.getElementById('project-live');

    if(Object.values(project)[4] !== ""){
        liveLink.href = Object.values(project)[4];
        liveLink.style.display = "inline-block";
    }
    else{
        liveLink.removeAttribute("href");
        liveLink.style.display = "none";
    }

    if(Object.values(project)[3] !== ""){
        githubLink.href = Object.values(project)[3];
        githubLink.style.display = "inline-block";
    }
    else{
        githubLink.removeAttribute("href");
        githubLink.style.display = "none";
    }

    for(a = 0; a < modalTargets.length; a++){
        modalTargets[a].innerHTML = Object.values(project)[a];
    }

}

// ---------------------------------------------------------------------------- //
// --- CONTACT FORM --- //
const form = document.getElementById('gForm');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function(){

    submitButton.style.opacity = ".4";
    setTimeout(`submitButton.disabled = !0;`,2000);
    setTimeout(`submitButton.style.opacity = '1'; submitButton.innerHTML = '<i class="far fa-thumbs-up"></i>'; form.reset();`,2000);
}
);


window.addEventListener('load', function () {
    this.document.querySelector('#about-section').style.backgroundColor = '#232934';
    this.document.querySelector('#about-me').style.animation = 'aboutFade 1s cubic-bezier(0.1,-0.29, 0, 0.99) forwards 1 alternate';
    this.document.querySelector('#about-skills').style.animation = 'skillsFade 1s cubic-bezier(0.1,-0.29, 0, 0.99) .9s forwards 1 alternate';
    this.document.querySelector('#projects-section').style.animation = 'projectsFade 1s cubic-bezier(0.1,-0.29, 0, 0.99) .9s forwards 1 alternate';
});
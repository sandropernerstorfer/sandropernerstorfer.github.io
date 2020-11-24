// --- INTRO FADE IN ANIMATION --- //

const introWelcome = document.getElementById('intro-welcome');
const introDesc = document.getElementById('intro-desc');
const fullName = document.getElementById('full-name');
const fullTitle = document.getElementById('full-title');
const nameDisplay = document.getElementById('name-display');
const jobDisplay = document.getElementById('job-display');
const introBtn = document.getElementById('intro-button');
const goIcon = document.getElementById('goIcon');

function introFade(){

    setTimeout('introWelcome.style.opacity = ".9"; introWelcome.style.marginBottom = "0";',1);
    setTimeout('fullName.style.opacity = "1";',850);
    setTimeout(function nameInsert(){
        
        let name = "Sandro Pernerstorfer".split('');
    
        for (let a = 0; a < name.length; a++) {
        
            setTimeout(function timer(){
                nameDisplay.textContent += name[a];
            }, a * 50);
        }

    },1200);
    setTimeout('fullTitle.style.opacity = "1";',2600);
    setTimeout(function nameInsert(){
        
        let title = "Frontend Development".split('');
    
        for (let a = 0; a < title.length; a++) {
        
            setTimeout(function timer(){
                jobDisplay.textContent += title[a];
            }, a * 50);
        }

    },3000);
    setTimeout('introBtn.style.opacity = ".7"; goIcon.style.cursor = "pointer";',4200);
}

introFade();

// ---------------------------------------------------------------------------- //
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

// ---------------------------------------------------------------------------- //
// --- INTRO BUTTON --- //

introBtn.addEventListener('click',showContent,false);
const mainBox = document.getElementById('main-box');
const navbar = document.getElementById('side-nav');

function showContent(){
    navbar.style.display = 'block';
    mainBox.style.display = 'block';
    navbar.style.opacity = '1';
}

// ---------------------------------------------------------------------------- //
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

    if(Object.values(project)[3] !== ""){
        githubLink.href = Object.values(project)[3];
    }
    else{
        githubLink.removeAttribute("href");
    }

    for(a = 0; a < modalTargets.length; a++){
        modalTargets[a].textContent = Object.values(project)[a];
    }

}

// ---------------------------------------------------------------------------- //
// --- CONTACT FORM --- //

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function(){

    submitButton.style.opacity = ".4";
    setTimeout(`submitButton.disabled = !0;`,2000);
    setTimeout(`submitButton.style.opacity = '1'; submitButton.innerHTML = '<i class="far fa-thumbs-up"></i>';`,2000);
    
}
);
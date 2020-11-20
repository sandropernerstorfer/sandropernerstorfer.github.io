// *** DEVICE DETECTION *** //

let isMobile = false;

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))){
    isMobile = true;
    console.log('Viewing on Mobile Device');
    }
    else{
    console.log('Viewing on Desktop');
    }


// ******************************************************************************************************* //

let currentVW = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let currentVH = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

// *** ACTIONS WHEN ON MOBILE DEVICE *** //

let headerTag = document.getElementById('header-tag');

if(isMobile)
{
    headerTag.style.height = currentVH+'px';
};

// ****************************************** //
// *** INTRO FADE IN ANIMATION *** //

let introWelcome = document.getElementById('intro-welcome');
let introDesc = document.getElementById('intro-desc');
const full_name = document.getElementById('full-name');
const full_title = document.getElementById('full-title');
const name_display = document.getElementById('name-display');
const job_display = document.getElementById('job-display');
let introBtn = document.getElementById('intro-button');
let goIcon = document.getElementById('goIcon');

function introFade(){ // introBtn.style.opacity = "1"; //----TESTING
    setTimeout('introWelcome.style.opacity = ".9"; introWelcome.style.marginBottom = "0";',1);
    setTimeout('full_name.style.opacity = "1";',850);
    setTimeout(function nameInsert(){
        
        var name = "Sandro Pernerstorfer".split('');
    
        for (let a = 0; a < name.length; a++) {
        
            setTimeout(function timer(){
                name_display.textContent += name[a];
            }, a * 60);
        }
    },1200);
    setTimeout('full_title.style.opacity = "1";',2600);
    setTimeout(function nameInsert(){
        
        var title = "Frontend Development".split('');
    
        for (let a = 0; a < title.length; a++) {
        
            setTimeout(function timer(){
                job_display.textContent += title[a];
            }, a * 60);
        }
    },3000);
    setTimeout('introBtn.style.opacity = ".9"; goIcon.style.cursor = "pointer";',4200);
}

introFade();

// ******************************************************** //
// *** SMOOTH SCROLL *** //

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


introBtn.addEventListener('click',showContent,false);
const mainBox = document.getElementById('main-box');
const navbar = document.getElementById('side-nav');

function showContent(){
    navbar.style.display = 'block';
    mainBox.style.display = 'block';
    navbar.style.opacity = '1';
}

// ****************************************************************************** //

// *** GET LANGUAGE BUTTONS *** //

const eng_button = document.getElementById('btn-eng');
const de_button = document.getElementById('btn-de');

eng_button.addEventListener('click', function(){localStorage.setItem('sandroLanguage', 'english');languageHandling(english);}, false);
de_button.addEventListener('click', function(){localStorage.setItem('sandroLanguage', 'german');languageHandling(german);}, false);

// *** LANGUAGE HANDLING / INSERTION *** //

languageHandling();

// *** FUNCTION FOR LANGUAGE INSERTION *** //

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

// ****************************************************************************** //

// ---------------- Navigation Open/Close ------- //

const toggler = document.getElementById('toggle-icon');
var navOpen = false;

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

// ------------------ Projects Handling ---------- //

let buttons = document.querySelectorAll('.more-info');
buttons.forEach((btn) => { btn.addEventListener("click", (event) => { showInfo(btn.getAttribute('data')); }); });

function showInfo(x){
    alert("Working on Project-"+x);
}

// ------------------- Contact Form ------------- //

const submitButton = document.getElementById('submit-button');
const contactForm = document.getElementById('gForm');

submitButton.addEventListener('click', function(){
    submitButton.innerHTML = '<i class="far fa-thumbs-up"></i>';
    submitButton.style.opacity = ".4";
    contactForm.reset();
    setTimeout('submitButton.disabled = !0;',2000);
}
);
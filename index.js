const navigationList = document.getElementById('menuDesktop');

const meniuIcon = document.getElementById('meniuIcon');

meniuIcon.addEventListener('click',() =>{
    if(navigationList.classList.contains('hidden')){
        navigationList.style.display = 'block';
        navigationList.classList.remove('hidden');
    }
    else{
        navigationList.style.display = 'none';
        navigationList.classList.add('hidden');
    }
});


// --purple-dark-2: hsl(270, 0%, 5%);
// --purple-dark-1: hsl(270, 20%, 15%);
// --purple: hsl(270, 40%, 50%);
// --purple-light-1: hsl(270, 40%, 55%);


let root = document.querySelector(':root');

function lightMode(){
  root.style.setProperty('--purple-dark-1', '#FAFAFA');//background
  root.style.setProperty('--purple-dark-2', '#8AA29E');//navigation color
  root.style.setProperty('--purple', 'black');//writting
  root.style.setProperty('--purple-light-1', '#DB5461');
}

function darkMode(){
  root.style.setProperty('--purple-dark-1', 'hsl(270, 20%, 15%)');//background
  root.style.setProperty('--purple-dark-2', 'hsl(270, 0%, 5%)');//navigation color
  root.style.setProperty('--purple', 'hsl(270, 40%, 50%)');//writting
  root.style.setProperty('--purple-light-1', 'hsl(270, 40%, 55%)');
}

const switchDarkMode = document.getElementById('switchInput');
let darkModeIsChecked =true;

switchDarkMode.addEventListener('click', () => {
    if(darkModeIsChecked){
        lightMode();
        darkModeIsChecked=false;
    }
    else{
        
        darkMode();
        darkModeIsChecked=true;
    }
});

// Dimineata s-ar putea sa va iesiti din fire din cauza unui partener de afaceri. Faptul ca aveti pareri diferite nu trebuie sa va impiedice sa analizati situatia cu luciditate si sa luati o decizie de comun acord.

const rmButton = document.getElementById('readMoreButton');
let isReadMoreOn = false;


rmButton.addEventListener('click', () => {

    if(isReadMoreOn){
        const p = document.getElementById('about_me');
        p.innerHTML = 'Hi, my name is Lupsa Sergiu-Rares. I was born in Cluj-Napoca and I have been living there since. I study computer science. I like to meet new people and start doing or learning new things';
        rmButton.innerHTML = 'Read more';
        isReadMoreOn = false;
    }
    else{
        const p = document.getElementById('about_me');
        p.innerHTML = 'Hi, my name is Lupsa Sergiu-Rares. I was born in Cluj-Napoca and I have been living there since.'+
        'I study computer science. I like to meet new people and start doing or learning new things. '+
        'I did my internship on front end at Endava. There i developed some knowledge and skills '+
        'in HTML, CSS, JavaScript. On my gitHub account you can see another repository of another project i was part of '+
        '(FootballAnalytics). That is an data statistical learning project which i enjoyed just as much as making this project.'+
        'In my free time i enjoy listenning to music, watch a movie or a series or just hang out with friends';
        rmButton.innerHTML = 'Read less';
        isReadMoreOn = true;
    }
    
})


switchDarkMode.addEventListener('click', () => {
    const aux = localStorage.getItem('darkModeStorage');
       
    switch(aux){
        case null:
            // console.log(localStorage.getItem('darkModeStorage'));
            lightMode();
            darkModeIsChecked=false;
            localStorage.setItem('darkModeStorage',false);
        break
        case 'true':
            lightMode();
            darkModeIsChecked=true;
            localStorage.setItem('darkModeStorage',false);
        break
        case 'false':
            // console.log(localStorage.getItem('darkModeStorage'));
            darkMode();
            darkModeIsChecked=false;
            localStorage.setItem('darkModeStorage',true);
        break
        
    }

});

function onLoadDarkMode(){
    const aux = localStorage.getItem('darkModeStorage');
    switch(aux){
        case null:
            // console.log(localStorage.getItem('darkModeStorage'));
            darkMode();
            darkModeIsChecked=false;
            localStorage.setItem('darkModeStorage',true);
            switchDarkMode.checked=true;
        break
        case 'true':
            darkMode();
            darkModeIsChecked=true;
            localStorage.setItem('darkModeStorage',true);
            switchDarkMode.checked=true;
        break
        case 'false':
            // console.log(localStorage.getItem('darkModeStorage'));
            lightMode();
            darkModeIsChecked=false;
            localStorage.setItem('darkModeStorage',false);
            switchDarkMode.checked=false;
        break
        
    }
}


window.onload = onLoadDarkMode();
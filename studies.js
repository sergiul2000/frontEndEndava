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
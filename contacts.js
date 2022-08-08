const navigationList = document.getElementById('menuDesktop');

const meniuIcon = document.getElementById('meniuIcon');

meniuIcon.addEventListener('click',() =>{
     if(navigationList.style.display == 'none')
        navigationList.style.display = 'block';
    else
        navigationList.style.display = 'none';
});
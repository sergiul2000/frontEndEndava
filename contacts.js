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

//const div = document.getElementById('box2');

//ACCESARE
//console.log(div)


//STERGERE
// const div = document.querySelector('#box1');
// div.remove();

//MODIFICARE
//div.textContent = 'altceva';
//div.innerText = 'altceva' 
//diferenta intre ele e ca textContent va lua textul cu
//tot ce existe, nu tine cont nici de display none
//folosim innerHTML ca sa adaugam elem noi HTML

//ADAUGARE

// const p  = document.createElement('p');
// p.textContent = 'Black'
// div.append(p);

//putem seta atribute cu setAStribute si le stergem cu
//removeAtribute

const div = document.getElementById('parent');
const input = document.getElementById('input');
const list = document.getElementById('list');
let iterator=0;
function handleInputChange(event){
    input.value = input.value.toUpperCase();
}


addTask.addEventListener('click', function(){
    const inputLabel = document.getElementById('inputLabel');
    if(input.value){
        inputLabel.style.display = 'none';
        const newListElement = document.createElement('li');
        newListElement.textContent = input.value;
        newListElement.setAttribute('class','elementOfList');
        newListElement.setAttribute('id',iterator++);
        list.append(newListElement);
        input.value='';
    }
    else {
        inputLabel.style.display = 'block';
    }
    
})

const deleteIpunt = document.getElementById('deleteIdInput');
deleteTask.addEventListener('click',function(){
    let auxiliarDeleteId = document.getElementById(deleteIpunt.value);
    auxiliarDeleteId.remove();
    for(let i=deleteIpunt.value+1; i<iterator-1; i++){
        let rearange = document.getElementById(i);
        rearange.setAttribute('id', --i);
    }
})





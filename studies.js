const navDivs = document.querySelectorAll('navigationDiv');
function handleOnClickIcon(){
    //console.log(navDivs);

    navDivs.forEach(function(value){
    value.style.display = 'none';
    })
}




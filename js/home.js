window.addEventListener('click', outsideClick); //para saber qndo clicar fora da modal

function fechaSlideMenu(){
    document.getElementById('sidemenu').style.width='0';
    document.getElementById('container').style.marginLeft='0';
}
function abreSlideMenu(){
    document.getElementById('sidemenu').style.width='270px';
    document.getElementById('container').style.marginLeft='270px';
}

function abreModal(){
    document.getElementById('modal').style.display='block';
}

function fechaModal(){
    document.getElementById('modal').style.display='none';
}
function outsideClick(e) {
    var modal = document.getElementById('modal');
    if(e.target == modal){
        modal.style.display = 'none';
    }
}
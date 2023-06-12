let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}
window.onscroll = function(){
    efectoHabilidades();
} 




var downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', function() {
var fileUrl = 'hdv/hojadevida.pdf'; 

var link = document.createElement('a');
link.href = fileUrl;

link.setAttribute('download', '');

link.click();
});


var closeButton = document.querySelector('.close');
var infoDiv = document.querySelector('.info');

closeButton.addEventListener('click', function() {
    infoDiv.style.display = 'none';
});


  

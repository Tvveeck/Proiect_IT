
modal = document.getElementById("myModal");

var Subjects = {
    PC : 'PC',
    IOCLA : 'IOCLA',
    Manele : 'Manele',
    Ghiu : 'Ghiu',
    Restanta : 'Restanta',
    Licenta : 'Licenta'
};
var select = document.getElementById("materie");
for(index in Subjects) {
    select.options[select.options.length] = new Option(Subjects[index], index);
}

function submitdata1(){

  formData = new FormData(document.querySelector('form'))
  var materia = null;
   for (var pair of formData.entries()) {
     if(pair[0] == "materie")
       materia = pair[1];
     else
       titlu = pair[1];
   }
   if(materia == null){
     alert("Alege materia!");
   }
   else if(titlu.length < 1 ){
     alert("Scrie un titlu!");
   }
   else {

     const p1 = document.createElement('h5');
     p1.innerText = "" + titlu;
     document.querySelector('#plangeri').appendChild(p1);

     const p2 = document.createElement('p');
     p2.innerText = "(" + materia + ")";
     document.querySelector('#plangeri').appendChild(p2);

  }

}



function modalFunction(){
  document.getElementById("myModal").style.display = "block";
}

function hideModal(){
  document.getElementById("myModal").style.display = "none";
}

function myFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.drop-down-menu') ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
}

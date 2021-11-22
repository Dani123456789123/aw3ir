window.onload = function () {
    document.querySelector("#Submit").addEventListener("click", function(event){
      event.preventDefault();

      var myModal = new bootstrap.Modal(document.getElementById('myModal'));
      var dateNaissance = new Date(document.getElementById("Date-de-naissance").value);
      if(document.querySelector("#Nom").value == "" || document.querySelector("#Nom").value.length < 5){
        document.querySelector(".modal-title").textContent = "Attention erreur";
        document.querySelector(".modal-body").textContent = "Veuillez saisir votre nom de plus de 5 characteres";
        document.querySelector("#map").src = "#";
        myModal.show();
      }
      else if(document.querySelector("#Prenom").value == "" || document.querySelector("#Prenom").value.length < 5){
        document.querySelector(".modal-title").textContent = "Attention erreur";
        document.querySelector(".modal-body").textContent = "Veuillez saisir votre prenom de plus de 5 characteres";
        document.querySelector("#map").src = "#";
        myModal.show();
      }
      else if(dateNaissance.getTime() > Date.now() || document.getElementById("Date-de-naissance").value == ""){
        document.querySelector(".modal-title").textContent = "Attention erreur";
        document.querySelector(".modal-body").textContent = "Veuillez saisir une date au passé";
        document.querySelector("#map").src = "#";
        myModal.show();
      }
      else if(document.querySelector("#Adresse").value == "" || document.querySelector("#Adresse").value.length < 5 ){
        document.querySelector(".modal-title").textContent = "Attention erreur";
        document.querySelector(".modal-body").textContent = "Veuillez saisir votre adresse de plus de 5 characteres";
        document.querySelector("#map").src = "#";
        myModal.show();
      }
      else if(document.querySelector("#Mail").value == "" || document.querySelector("#Mail").value.length < 5 || validateEmail(document.querySelector("#Mail").value) == false ){
        document.querySelector(".modal-title").textContent = "Attention erreur";
        document.querySelector(".modal-body").textContent = "Veuillez saisir un mail valide de plus de 5 characteres";
        document.querySelector("#map").src = "#";
        myModal.show();
      }

      else{
        document.querySelector(".modal-title").textContent = "Bienvenue " + document.querySelector("#Prenom").value + " !" ;
        var month = dateNaissance.getUTCMonth() + 1;
        var day = dateNaissance.getUTCDate();
        var year = dateNaissance.getUTCFullYear();
        newdate = day + "/" + month + "/" + year;
        document.querySelector(".modal-body").textContent = "Vous êtes né le "+ newdate +" et vous habitez ici: ";

        document.querySelector("#map").src = `https://maps.googleapis.com/maps/api/staticmap?markers=${document.querySelector("#Adresse").value}&zoom=7&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
        document.querySelector("#lien").href= `http://maps.google.com/maps?q=${document.querySelector("#Adresse").value}`;
        myModal.show();
      }
});
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
window.onload = function () {
    document.querySelector("#gps").addEventListener("click", function(event){
        event.preventDefault();
        getLocation();
    })
       
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
        var month = dateNaissance.getUTCMonth() + 1;
        var day = dateNaissance.getUTCDate();
        var year = dateNaissance.getUTCFullYear();
        newdate = day + "/" + month + "/" + year;

        contactStore.add(document.querySelector("#Nom").value, document.querySelector("#Prenom").value, newdate, document.querySelector("#Adresse").value, document.querySelector("#Mail").value);
        document.querySelector("tbody").innerHTML = "";
        var listecontact = contactStore.getList();
        for (var index in listecontact) {
            document.querySelector("tbody").innerHTML =
                document.querySelector("tbody").innerHTML +
                                "<tr><td>" +
                                listecontact[index].name +
                                "</td><td>" +
                                listecontact[index].firstname +
                                "</td><td>" +
                                listecontact[index].date +
                                "</td><td> <a href= 'https://maps.googleapis.com/maps/api/staticmap?markers=${document.querySelector(" + listecontact[index].adress + ").value}&zoom=7&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' target='_blank'>" +
                                listecontact[index].adress +
                                " </a> </td><td> <a href='mailto:'>"+
                                listecontact[index].mail +
                                "</a></td></tr>" ;
        }


        document.querySelector("#Nom").value = "";
        document.querySelector("#Prenom").value = "";
        document.querySelector("#Date-de-naissance").value = "";
        document.querySelector("#Adresse").value = "";
        document.querySelector("#Mail").value = "";
        document.querySelector(`#Nom + span`).textContent = "";
        document.querySelector(`#Prenom + span`).textContent = "";
      }
});
}






function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length + " car.";
}
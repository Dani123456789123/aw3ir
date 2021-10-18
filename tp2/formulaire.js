function validation()
{
    document.getElementById("error").innerHTML = "";
    document.getElementById("resultat").innerHTML = ""
    document.getElementById("error").style.visibility = "hidden";
    document.getElementById("resultat").style.visibility = "hidden";

    if(document.getElementById("Nom").value.length < 5 )
    {
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error").innerHTML = "La saisie d'un nom valide est obligatoire<br>" ;
    }

    if(document.getElementById("Prenom").value.length < 5 )
    {
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error").innerHTML = document.getElementById("error").innerHTML  + "La saisie d'un prenom valide est obligatoire<br>";
    }

    if(document.getElementById("Date de naissance").value >= (new Date().toISOString().substr(0,10)) || document.getElementById("Date de naissance").value == 0 )
    {
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error").innerHTML = document.getElementById("error").innerHTML + "La saisie d'une date de naissance valide et au passé est obligatoire<br>" ;
    }

    if(document.getElementById("Adresse").value.length < 5 )
    {
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error").innerHTML =document.getElementById("error").innerHTML + "La saisie d'un adresse valide est obligatoire<br>";
    }

    if(document.getElementById("Mail").value.length < 5 || document.getElementById("Mail").value.indexOf("@") == -1)
    {
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("error").innerHTML = document.getElementById("error").innerHTML + "La saisie d'un mail valide contenant une @ est obligatoire<br>";
    }

    if(document.getElementById("Nom").value.length > 5 && document.getElementById("Prenom").value.length > 5 && document.getElementById("Adresse").value.length > 5 && document.getElementById("Mail").value.length > 5 && document.getElementById("Mail").value.indexOf("@") != -1 && document.getElementById("Date de naissance").value < (new Date().toISOString().substr(0,10)) && document.getElementById("Date de naissance").value != 0) 
    {
        document.getElementById("error").innerHTML = "";
        document.getElementById("error").style.visibility = "hidden";
        document.getElementById("resultat").style.visibility = "visible";
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.getElementById("Nom").value.toUpperCase()+ " " + document.getElementById("Prenom").value + " !";
    }
}
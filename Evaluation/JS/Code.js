<!--
 Auteur:    Mounir Fiaux
 Titre:     Code
 Projet:    Evaluation
 date:      15.11.19
 version:   0.1
 -->

document.addEventListener("DOMContentLoaded", evenement);
lbl_prenom.classList.remove("cacher")

function prenom() { // fonction permettent d'afficher ou non le message d'erreur du prénom
    var minLength = 3;
    if (txt_name >= minLength) {
        lbl_prenom.classList.add("cacher")
    } else {
        lbl_prenom.classList.remove("cacher")
    }
}

function nom() { // fonction permettent d'afficher ou non le message d'erreur du nom
    var minLength = 3;
    if (txt_lastname >= minLength) {
        lbl_nom.classList.add("cacher")
    } else {
        lbl_nom.classList.remove("cacher")
    }
}

function password() { // fonction permettent d'afficher ou non le message d'erreur du Mot de passe
    var minLength = 3;
    if (txt_password1 >= minLength) {//affiche ou non le premier message d'erreur du mot de passe
        txt_password1.classList.add("cacher")
        if (txt_password1 == txt_password2) {//affiche ou non le deuxième message d'erreur du mot de passe
            txt_password2.classList.add("cacher")
        } else {
            txt_password2.classList.remove("cacher")
        }
    } else {
        txt_password1.classList.remove("cacher")
    }
}


function evenement() { //initialise les evenements
    txt_name.addEventListener("keypessed", prenom);
    txt_lastname.addEventListener("keypressed", nom);
    txt_password1.addEventListener("keypressed", password);
}










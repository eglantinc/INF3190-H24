function validerNom() {
    let nom = document.getElementById("nom").value;
    let erreurNom = document.getElementById("erreur-nom");

    if (nom.trim().length === 0) {
        erreurNom.innerHTML = "Veuillez indiquer votre nom avant de soumettre le formulaire!";
        return false;
    } else {
        erreurNom.innerHTML = "";
        return true;
    }
}

function validerPays() {
    let pays = document.getElementsByName("pays");
    let erreurPays = document.getElementById("erreur-pays");
    let estSelectionne = false;

    for (let i = 0; i < pays.length; i++) {
        if (pays[i].checked) {
            estSelectionne = true;
            break;
        }
    }

    if (!estSelectionne) {
        erreurPays.innerHTML = "Veuillez sélectionner un pays avant de soumettre le formulaire!";
        return false;
    } else {
        erreurPays.innerHTML = "";
        return true;
    }
}

function validerCouleurs() {
    let couleur = document.getElementById("couleurs").value;
    let erreurCouleurs = document.getElementById("erreur-couleurs");

    if (couleur === "valeurParDefaut") {
        erreurCouleurs.innerHTML = "Veuillez choisir une couleur avant de soumettre le formulaire!";
        return false;
    } else {
        erreurCouleurs.innerHTML = "";
        return true;
    }
}


function validerEtSoumettre(event) {
    let nomValide = validerNom();
    let paysValide = validerPays();
    let couleursValide = validerCouleurs();

    let formulaireValide = nomValide && paysValide && couleursValide;

    if (!formulaireValide) {
        // Empêche la soumission du formulaire si la validation échoue
        event.preventDefault();
        document.getElementById("erreur-form").innerHTML = "Vérifiez bien tous les champs du formulaire!";
    }
    // Si le formulaire est valide, il se soumet normalement
}

function validationFinale() {
    document.getElementById("nom").addEventListener('input', validerNom);

    document.querySelectorAll('input[name="pays"]').forEach((element) => {
        element.addEventListener('change', validerPays);
    });

    document.getElementById("couleurs").addEventListener('change', validerCouleurs);

    document.getElementById("monFormulaire").addEventListener('submit', validerEtSoumettre);
}


validationFinale();

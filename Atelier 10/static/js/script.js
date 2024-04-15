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

function validerPrenom() {
    let prenom = document.getElementById("prenom").value;
    let erreurPrenom = document.getElementById("erreur-prenom");

    if (prenom.trim().length === 0) {
        erreurPrenom.innerHTML = "Veuillez indiquer votre prénom avant de soumettre le formulaire!";
        return false;
    } else {
        erreurPrenom.innerHTML = "";
        return true;
    }
}

function validerAge() {
    let age = document.getElementById("age").value;
    let erreurAge = document.getElementById("erreur-age");

    if (age.trim().length === 0) {
        erreurAge.innerHTML = "Veuillez indiquer votre âge avant de soumettre le formulaire!";
        return false;
    } else {
        erreurAge.innerHTML = "";
        return true;
    }
}

function validerEtSoumettre(event) {
    let nomValide = validerNom();
    let prenomValide = validerPrenom();
    let ageValide = validerAge();

    let formulaireValide = nomValide && prenomValide && ageValide;

    if (!formulaireValide) {
        event.preventDefault();
        document.getElementById("erreur-form").innerHTML = "Vérifiez bien tous les champs du formulaire!";
    }

}

var boutonTrier = document.getElementById("btnTrier");
if (boutonTrier) {
    boutonTrier.addEventListener("click", trierParNom);
}

function trierParNom() {
    // Obtient la référence à l'élément de tableau dans le document
    var tableau = document.getElementById("table");

    // Récupère les lignes du tableau
    var lignes = tableau.rows;

    // Indicateur pour contrôler la boucle de tri
    var permutation, index, doitPermuter;

    // Boucle de tri
    do {
        // Initialise l'indicateur de permutation à faux
        permutation = false;

        // Parcours des lignes du tableau
        for (index = 1; index < lignes.length - 1; index++) {
            // Initialise l'indicateur de permutation pour la paire actuelle
            doitPermuter = false;

            // Récupère les cellules actuelle et suivante
            var celluleActuelle = lignes[index].getElementsByTagName("td")[0];
            var celluleSuivante = lignes[index + 1].getElementsByTagName("td")[0];

            // Compare les valeurs dans les cellules et détermine si elles doivent être échangées
            if (celluleActuelle.innerHTML.toLowerCase() > celluleSuivante.innerHTML.toLowerCase()) {
                doitPermuter = true;

                // Échange les lignes dans le tableau
                lignes[index].parentNode.insertBefore(lignes[index + 1], lignes[index]);

                permutation = true;
            }
        }
    } while (permutation); // Continue la boucle tant qu'il y a des permutations
}

function validationFinale() {
    document.getElementById("nom").addEventListener('input', validerNom);
    document.getElementById("prenom").addEventListener('input', validerPrenom);
    document.getElementById("age").addEventListener('input', validerAge);
    document.getElementById("monFormulaire").addEventListener('submit', validerEtSoumettre);
}

validationFinale();

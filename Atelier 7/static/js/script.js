// NE PAS OUBLIER D'APPELER VOS FONCTIONS SVP

validerFormulaire();
remplirEncore();
initialiserFormulaire();

// INPUT: déclenché chaque fois qu'un champ est modifié par l'utilisateur.
// se déclenche à chaque fois qu'une nouvelle valeur est entrée dans 
// l'élément ou que sa valeur existante est modifiée.
// Donc, les messages d'erreurs s'affichent au fur et à mesure que
// je remplisse le champ, c'est assez dynamique 😅
function validerFormulaire() {
    document.getElementById('nom').addEventListener('input', () => {
        validerNom();
    });
    document.getElementById('prenom').addEventListener('input', () => {
        validerPrenom()
    })

    document.getElementById('date').addEventListener('input', () => {
        validerDate()
    });
    document.getElementById('code-permanent').addEventListener('input', () => {
        validerCodePermanent();
    });

    document.getElementById('genre').addEventListener('input', () => {
        validerGenre();
    });

    document.getElementById('satisfait').addEventListener('input', () => {
        validerSatisfaction();
    });

    document.getElementById('pas-satisfait').addEventListener('input', () => {
        validerSatisfaction();
    });


}

function remplirEncore() {
    document.getElementById('remplir-encore').addEventListener('click', () => {
        // Réinitialiser le formulaire en effaçant toutes les valeurs et en réaffichant le bouton de soumission
        document.getElementById('formulaire').reset();
        document.getElementById('remerciement').innerHTML = '';
        // Enlever le message de satisfaction 
        document.getElementById('msg-satisfaction').style.display = 'none';
        // Réafficher le bouton de soumission
        document.getElementById('soumettre').style.display = 'block';

        // Masquer le bouton 'Remplir Encore'
        document.getElementById('remplir-encore').style.display = 'none';
    
    });
}


function initialiserFormulaire() {
    const formulaire = document.getElementById('formulaire'); 
    formulaire.addEventListener('submit', (event) => {
        event.preventDefault();
        validerDate(); 
        validerGenre();
        validerPrenom();
        validerNom();
        validerCodePermanent();
        validerSatisfaction();
        // Si toutes les validations sont vraies, afficher le bouton 'Remplir Encore', sinon soumettre le formulaire
        if ( validerDate() && validerGenre() && validerPrenom() &&  validerNom() && validerCodePermanent()) {  
            // Message de remerciement
            document.getElementById('remerciement').innerHTML = 'Merci!';
            // Masquer le bouton de soumission
            document.getElementById('soumettre').style.display = 'none';
            // Afficher le bouton 'Remplir Encore' (on change soumettre pour remplir encore)
            document.getElementById('remplir-encore').style.display = 'block';
            // Pour que le message d'erreur ne s'affiche pas
            document.getElementById('erreur-global').innerHTML = '';
        } else {

            document.getElementById('erreur-global').innerHTML = 'Veuillez vous assurer que tous les champs sont valides avant la soumission!'
        }
    });
}

function validerSatisfaction() {
    const satisfait = document.getElementById('satisfait').checked;
    const pasSatisfait = document.getElementById('pas-satisfait').checked;
    const erreur_satisfaction = document.getElementById('erreur-satisfaction');
    let msg_satisfaction = document.getElementById('msg-satisfaction');
    
    // Vérifier si l'utilisateur n'a pas sélectionné d'option
    if (!satisfait && !pasSatisfait) {
        // Afficher le message d'erreur
        erreur_satisfaction.style.display = 'block';
        erreur_satisfaction.innerHTML = 'Veuillez sélectionner une option.';
        return false;
    } else {
        // Si une option est sélectionnée, cacher le message d'erreur
        erreur_satisfaction.style.display = 'none';
        erreur_satisfaction.innerHTML = ''; // Effacer le contenu du message d'erreur
    
        if(satisfait) {
            msg_satisfaction.innerHTML = '😊';
        } else {
            msg_satisfaction.innerHTML = '😢';
        }
        return true;
    }
}


// Toujours les mêmes étapes dans ces cas de figure
        // 1 - Récupérer le/les éléments à modifier dans le document html (document.getElementById())
        // 2- Puisque notre validation sera faites sur la valeur dans le champ de l'élément,
        //  on récupère aussi la valeur, et c'est sur celle-ci qu'il faut faire la validation
        // 3- Faire les validations (if/else)
        // 4- Changer la visibilité du message d'erreur (display = 'block'), ce qui rend le message
        // d'erreur visible
        // 5- Ajouter le message d'erreur (innerHTML)
        // 6- Par la suite, lorsque vous terrminez les validations, changerr encore une fois la visibilitéd de
            // l'élément (display = 'block')
        // 7- "Vider l'erreur", reinitialiser le contenu de l'element (erreur_date.innerHTML = '';)
        // 8- Return True



function validerDate() {
    let format = /[0-9]{4}-[0-1][0-9]-[0-3][0-9]/; // Regex pour le format (uniquement le format)
    let date = document.getElementById('date').value.trim(); // Prendre la valeur dans le champ et supprimer les espaces au début et à la fin
    let erreur_date = document.getElementById('erreur-date-naissance');

    // Vérifier si le champ est vide
    if (date.length === 0) { 
        erreur_date.style.display = 'block'; // Le message d'erreur apparaît
        erreur_date.innerHTML = 'Veuillez entrer votre date de naissance avant de soumettre le formulaire.'; // On modifie le contenu du html
        return false; // retourner faux
        

    }

    // Vérifier si la date ne correspond pas au format attendu,
    // afficher un message d'erreur en conséquence
    else if (!format.test(date)) {
        erreur_date.style.display = 'block';
        erreur_date.innerHTML = 'Le format de la date de naissance est incorrect. Utilisez le format AAAA-MM-JJ.';
        return false;
    }

    // Si la date est valide, cacher le message d'erreur (si affiché précédemment)
    // Réinitialiser le contenu de l'erreur
    erreur_date.style.display = 'none'; // Cacher le message d'erreur
    erreur_date.innerHTML = ''; // Réinitialiser le contenu de l'erreur
    return true; // La date est valide
}


function validerGenre() {
    let genre = document.getElementById('genre').value;
    let erreur_genre = document.getElementById('erreur-genre');

    if (genre.trim().length === 0) { // Si le champ genre n'est pas vide
        erreur_genre.style.display = 'block';
        erreur_genre.innerHTML = 'Veuillez spécifier votre genre avant la soumission!';
        return false;
    } else if (genre.toUpperCase() !== 'F' && genre.toUpperCase() !== 'M') {
        erreur_genre.style.display = 'block';
        erreur_genre.innerHTML = 'Veuillez préciser votre genre (F ou M) avant la soumission!';
        return false;
    } 
        // Cacher le message d'erreur et réinitialiser le contenu de l'erreur
        erreur_genre.style.display = 'none';
        erreur_genre.innerHTML = '';
        return true;
}

function validerPrenom() {
    let erreur_prenom = document.getElementById('erreur-prenom'); // Utiliser l'ID 
    let prenom = document.getElementById('prenom').value;
    if (prenom.trim().length === 0 ) { // Utiliser la fonction trim() pour supprimer les espaces blancs
        erreur_prenom.style.display =  'block';
        erreur_prenom.innerHTML = 'Veuillez spécifier votre prenom avant la soumission.'
        return false;
    }

    // Réinitialiser le contenu de l'erreur
    erreur_prenom.innerHTML = '';

    return true;
}

function validerNom() {
    let erreur_nom = document.getElementById('erreur-nom'); 
    let nom = document.getElementById('nom').value;
    if (nom.trim().length === 0 ) { 
        erreur_nom.style.display =  'block';
        erreur_nom.innerHTML = 'Veuillez préciser votre nom avant la soumission!'
        return false;
    }

    // Réinitialiser le contenu de l'erreur
    erreur_nom.innerHTML = '';

    return true;
}

function validerCodePermanent() {
    let code_permanent = document.getElementById('code-permanent').value.trim(); // Supprimer les espaces au début et à la fin
    let erreur_code_permanent = document.getElementById('erreur-code-permanent');
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let naissance = document.getElementById('date').value;
    let genre = document.getElementById('genre').value;

    // Réinitialiser le contenu de l'erreur
    erreur_code_permanent.innerHTML = '';

    // Vérifier si le champ de code permanent est vide
    if (code_permanent.length === 0) {
        erreur_code_permanent.style.display = 'block';
        erreur_code_permanent.innerHTML += 'Veuillez préciser votre code permanent avant la soumission.';
        return false;
    }

    // Vérifier que les 4 premières lettres du code permanent sont en majuscules
    if (code_permanent.slice(0, 4) !== code_permanent.slice(0, 4).toUpperCase()) {
        erreur_code_permanent.style.display = 'block';
        erreur_code_permanent.innerHTML += 'Les quatre premières lettres du code permanent doivent être en majuscules.<br>';
        return false;
    }

    // Vérifier que les 3 premières lettres du code permanent sont en majuscules
    if (code_permanent.slice(0, 3) !== nom.slice(0, 3).toUpperCase()) {
        erreur_code_permanent.style.display = 'block';
        erreur_code_permanent.innerHTML += 'Les trois premières lettres du code permanent doivent être les trois premières lettres du nom, en majuscules.<br>';
        return false;
    }

    // Vérifier que le quatrième caractère du code permanent est la première lettre du prénom
    if (prenom.charAt(0).toUpperCase() !== code_permanent.charAt(3)) {
        erreur_code_permanent.style.display = 'block';
        erreur_code_permanent.innerHTML += 'Le quatrième caractère du code permanent doit être la première lettre du prénom, en majuscule.<br>';
        return false
    }

    // Vérifier que le cinquième et le sixième caractère du code permanent sont le jour de naissance
    if (naissance.slice(-2) !== code_permanent.slice(4, 6)) {
        erreur_code_permanent.style.display = 'block';
        erreur_code_permanent.innerHTML += 'Les cinquième et sixième caractères du code permanent doivent être le jour de naissance, sur 2 caractères.<br>';
        return false
    }

    // Vérifier le mois de naissance dans le code permanent (ajouter 50 si c'est une femme)
    let moisNaissance = parseInt(naissance.slice(5, 7)); // parseInt pour obtenir la valeur entière du mois
    if (genre.toUpperCase() === 'F') { 
        moisNaissance += 50;
    }

    let moisCodePermanent = parseInt(code_permanent.slice(6, 8));
    if (moisNaissance !== moisCodePermanent) {
        erreur_code_permanent.style.display = 'block';
        erreur_code_permanent.innerHTML += 'Le septième et huitième caractères du code permanent doivent être le mois de naissance.<br>' +
           'Si vous vous identifier comme femme, veuillez augmenter votre mois de naissance de 50.' ;
        return false;
    }

    // Vérifier que les deux derniers caractères du code permanent sont des chiffres
    let valeurSequentielle = code_permanent.slice(8);
    if (isNaN(valeurSequentielle) || valeurSequentielle.length !== 2) {
        erreur_code_permanent.style.display = 'block';
        erreur_code_permanent.innerHTML += 'Les deux derniers caractères du code permanent doivent être une valeur séquentielle de deux chiffres.<br>';
        return false;
    }


    // Si toutes les validations passent, le code permanent est valide
    // Dans ce cas, on peut vider le message d'erreur
    erreur_code_permanent.style.display = 'none';

    return true;
}

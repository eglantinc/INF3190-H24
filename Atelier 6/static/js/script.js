// Définir les polices qu'on utilisera
const polices = ["Arial", "Georgia", "Times New Roman"];
let policeIndex = 0; // Commence avec le premier indice du tableau

// Sélectionne le bouton par son ID
const bouton = document.getElementById('changer-police');

// Lorsqu'on clique sur le bouton
bouton.addEventListener('click', police);

function police() {
    // Sélectionne tous les paragraphes
    const paragraphs = document.querySelectorAll('p');
    
    
    // Pour chaque paragraphe, changer la police
    paragraphs.forEach(function(p) {
        // On fait appelle au CSS avec style
        // Les paragraphes changent de police de caractères.
        p.style.fontFamily = polices[policeIndex];
    });
    
    // Incrémente l'indice pour changer la police au prochain clic
    // S'assure que l'indice revient à 0 si on dépasse la longueur du tableau
    // Pour rendre le tableau circulaire
    policeIndex = (policeIndex + 1) % polices.length;


}






let bouton_ordre = document.getElementById('changer-ordre');

// Ajouter le event listener
bouton_ordre.addEventListener('click', ordre);

function ordre(){
    let p1 = document.getElementById("p1").innerHTML;
    let p2 = document.getElementById("p2").innerHTML;
    let p3 = document.getElementById("p3").innerHTML;

    /// Utilisation de `innerHTML` pour mettre à jour le texte à l'intérieur des éléments HTML.
    // Par exemple, ici on échange le contenu des paragraphes pour une nouvelle disposition :
    document.getElementById("p1").innerHTML = p3; // Le premier paragraphe devient le troisième
    document.getElementById("p2").innerHTML = p1; // Le deuxième devient le premier 
    document.getElementById("p3").innerHTML = p2; // Le troisième devient le deuxième.


}






let bouton_titre = document.getElementById('controler-titre');

function titre() {
    let titre = document.getElementById("titre");
    // Par défaut, le titre est affiché (display:block;)
    // Si le titre est affiché quand on clique, cela le fait disparaître (display: none;)
    // Si le titre n'est pas affiché, quand on clique, cela le fait apparaître
    if (titre.style.display === "none") {
        titre.style.display = "block";
    } else {
        titre.style.display = "none";
    }
}

bouton_titre.addEventListener('click', titre);






let titre_couleur = document.getElementById('titre');

function changeTitreColor() {
    // Le titre doit devenir rouge
    document.getElementById('titre').style.color = 'red'; 
}

  // Lorsqu'on clique sur le titre
titre_couleur.addEventListener('click', changeTitreColor);






let ajout_paragraphe = document.getElementById("ajouter-paragraphe")
function ajouterParagraphe() {
    // Créer un élément p (paragraphe)
    let p = document.createElement("p");
    // Créer la variable Lopem Ipsum
    let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    p.innerHTML = loremIpsum; //  Définir le contenu HTML d'un élément
    // Ajouter un nœud enfant (paragrapje) à un nœud parent (body)
    document.body.appendChild(p);
  }
  
  // Ajouter le event listener
  ajout_paragraphe.addEventListener("click", ajouterParagraphe);
  
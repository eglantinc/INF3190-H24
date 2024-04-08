# IMPORTANT D'AVOIR CETTTE EN TÊTE
from flask import Flask, render_template, request, redirect
import Validation
app = Flask(__name__)

# Indique à Flask que accueil
# doit être exécutée quand un utilisateur accède à la racine
# Donc, la fonction accueil sera appelée chaque fois qu'un utilisateur demande
# la page d'accueil

# Dans la définition de route @app.route('/'), l'URL associée sera simplement "/"
@app.route('/')
def accueil():
    # envoie le contenu de la page un code de statut HTTP 200,
    # indiquant que tout s'est bien passé.
    return render_template('index.html'), 200

@app.route('/valider', methods=['POST', 'GET'])
def valider():
    # GET
    if request.method == 'GET':
        return render_template('index.html'), 200

    # POST
    else:
        nom = request.form['nom']
        pays = request.form['pays']
        couleurs = request.form['couleurs']

        if (
                Validation.valider_nom(nom) and
                Validation.valider_pays(pays) and
                Validation.valider_couleur(couleurs)
        ):
            # Si valides, on écrit les informations récupérées dans le fichier log.txt
            # with ouvre et ferme automatiquement le fichier après exédution
            with open("log.txt", "w") as log:
                log.write("Nom : {}\nPays : {}\nCouleur : {}".format(nom, pays, couleurs))

            # REDIRECT : Après la validation réussie du formulaire, l'application redirige
            # vers la page de remerciement avec l'URL de destination '/remerciement'
            return redirect('/remerciement'), 301


# Définit la route '/remerciement' (voire aussi redirect('/remerciement'), 301)
@app.route('/remerciement')
def remerciement():
    return render_template('remerciement.html'), 200

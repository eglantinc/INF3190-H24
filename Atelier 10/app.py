import csv

from flask import Flask, render_template, request, redirect

from Validation import valider_nom, valider_prenom, valider_age

app = Flask(__name__)


@app.route('/')
def accueil():
    # envoie le contenu de la page un code de statut HTTP 200,
    # indiquant que tout s'est bien passé.
    return render_template('form.html'), 200

@app.route('/valider', methods=['POST', 'GET'])
def valider():
    if request.method == 'GET':
        return render_template('form.html'), 200
    else:
        nom = request.form['nom']
        prenom = request.form['prenom']
        age = request.form['age']

        if valider_nom(nom) and valider_prenom(prenom) and valider_age(age):
            with open("log.txt", "a", encoding="utf8") as log:
                log.write(f"{nom}, {prenom}, {age}\n")
            return redirect('/liste-personnes'), 301

@app.route('/liste-personnes')
def liste_personnes():
    personnes = []
    try:
        with open('log.txt', 'r', encoding='utf8') as fichier:
            for ligne in fichier:
                if ligne.strip():  # Vérifie que la ligne n'est pas vide
                    personnes.append(ligne.strip().split(', '))
    except FileNotFoundError:
        return "Le fichier n'a pas été trouvé", 404

    return render_template('personnes.html', personnes=personnes)


if __name__ == '__main__':
    app.run()

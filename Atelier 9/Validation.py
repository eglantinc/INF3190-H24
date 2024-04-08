
def valider_nom(nom):
    # Si le client n'entre pas de valeurs
    if nom is None or nom == "":
        return False
    return True


def valider_pays(pays):
    if pays == "" or pays == "valeurParDefaut":
        return False
    return True


def valider_couleur(couleur):
    if couleur is None or couleur == "":
        return False
    return True

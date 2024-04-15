def valider_nom(nom):
    return nom is not None and nom.strip() != ""


def valider_prenom(prenom):
    return prenom is not None and prenom.strip() != ""


def valider_age(age):
    return age is not None and age.strip() != ""

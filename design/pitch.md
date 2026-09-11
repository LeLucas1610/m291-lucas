# Pitch — mon app M291

**Nom de l'app :** PICKR

**En une phrase, elle sert à :** réunir tous ses jeux vidéo, toutes plateformes confondues, dans une seule bibliothèque, et choisir en moins d'une minute quoi lancer ce soir.

**À qui (prénom + âge + situation) :** Kevin, 29 ans, logisticien à Vevey, avec plus de 60 jeux jamais lancés répartis sur Switch, PS5 et PC. Le soir, il perd 20 minutes à chercher quoi jouer, puis relance toujours le même jeu.

**La tâche n°1 (celle du flow) :** trouver dans sa bibliothèque un jeu jamais commencé, disponible sur Switch, qui se termine en moins de 10 heures, et le passer en « En cours ».

**Les données (inventées) ressemblent à :** fiches de jeux fictifs (50 fiches), qui forment la bibliothèque de Kevin, stockées dans un fichier JSON local.

**Pourquoi ce n'est pas trop grand pour 4 semaines de code :** trois écrans (bibliothèque, fiche, en cours), des données statiques, les changements de statut gardés dans le navigateur, aucun serveur. Je refuse de faire : synchronisation avec les plateformes, compte, partie sociale, prix et achat.

---

## Annexe — détail du périmètre

### Structure d'une fiche

| Champ | Type | Exemple |
|---|---|---|
| id | texte | lanterne-02 |
| titre | texte | Lanterne Froide |
| plateforme | Switch / PS5 / PC | Switch |
| genre | texte | Aventure |
| dureeEstimee | heures | 8 |
| statut | à jouer / en cours / terminé / abandonné | à jouer |
| dateAjout | date | 2025-11-28 |
| resume | 1 phrase | « Une gardienne de phare explore une île gelée pour rallumer la lumière. » |
| jaquette | image | lanterne-02.webp |



Répartition prévue : environ 60 % « à jouer », 15 % « en cours », 20 % « terminé », 5 % « abandonné », sur les 3 plateformes, avec des durées de 2 à 80 heures. Au moins une combinaison de filtres ne donne aucun résultat, pour tester l'état vide.

### Écrans

1. **Bibliothèque** (écran principal) : grille de jaquettes, filtres plateforme, statut, genre et durée, plus une recherche par titre et un tri (date d'ajout, durée, titre). Un compteur en haut indique le nombre de jeux affichés.
2. **Fiche** : jaquette, résumé, durée, plateforme, et un sélecteur de statut qui s'enregistre directement.
3. **En cours** : les jeux commencés, pour reprendre sans chercher.

État « aucun résultat » : un message qui indique quel filtre assouplir.

### Socle et bonus

- **Socle (semaines 1 à 3) :** les trois écrans, les filtres, la recherche, le tri, le changement de statut et l'état vide.
- **Bonus (semaine 4, seulement si le socle marche) :**
  - Bouton « Au hasard » : tire un jeu « à jouer » parmi les résultats filtrés.
  - Statistiques : nombre de jeux par statut, heures de jeu en attente.
  - Ajout manuel d'un jeu par formulaire.
  - Mode sombre.

### Refus

| Je ne fais pas | Pourquoi |
|---|---|
| Synchronisation avec Steam, PSN, Nintendo, Epic | Chaque plateforme demande un compte, une API et des autorisations ; certaines n'en proposent pas. |
| Compte utilisateur | Kevin veut ouvrir et choisir ; localStorage suffit. |
| Partie sociale (amis, partage, avis) | Réseau social = hors périmètre selon la fiche. |
| Prix, soldes, achat | Données qui changent tout le temps, paiement hors du module. |
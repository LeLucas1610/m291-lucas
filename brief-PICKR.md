# Brief de Conception — PICKR

## Pitch

PICKR réunit tous les jeux vidéo d'une personne, toutes plateformes confondues, dans une seule bibliothèque. Il s'adresse aux joueurs qui accumulent les jeux jamais lancés et les aide à choisir en moins d'une minute quoi jouer ce soir.

## 1. Contexte & Problématique

En Suisse romande, beaucoup de joueurs adultes possèdent des jeux sur plusieurs plateformes (Switch, PS5, boutiques PC), achetés en soldes ou récupérés gratuitement. Leurs jeux sont éparpillés dans des bibliothèques séparées, et une grande partie n'est jamais lancée. Le soir, ils perdent du temps à chercher quoi jouer, puis relancent toujours le même jeu.

## 2. Profil de l'Utilisateur Cible (Persona)

- **Prénom & Âge :** Kevin, 29 ans, logisticien à Vevey
- **Contexte d'utilisation :** le soir, depuis le canapé, sur smartphone (390 px) tenu d'une main, avec environ une heure de jeu devant lui
- **Situation :** plus de 60 jeux jamais lancés, répartis sur Switch, PS5 et PC
- **Besoins clés :** choisir vite, reconnaître ses jeux à la jaquette, filtrer par plateforme et par durée sans ouvrir de menu
- **Ce qui le fait fermer l'app :** devoir créer un compte, une longue liste sans filtres, des jaquettes minuscules

Détail complet : [`design/persona.md`](design/persona.md)

## 3. Fonctionnalités Essentielles (Périmètre MVP)

1. Affichage de la bibliothèque sous forme de grille de cartes (jaquettes).
2. Filtrage instantané (plateforme, statut, genre, durée), recherche par titre et tri (date d'ajout, durée, titre).
3. Consultation d'une fiche détaillée complète.
4. Changement du statut d'un jeu (à jouer, en cours, terminé, abandonné), enregistré dans le navigateur.
5. État « aucun résultat » qui propose d'assouplir un filtre.

**Données :** 50 fiches de jeux inventées dans un fichier JSON local. Le JSON n'est jamais modifié : seuls les changements de statut sont stockés dans le localStorage.

### Structure d'une fiche

| Champ | Type | Exemple |
|---|---|---|
| id | texte | lanterne-02 |
| titre | texte | Lanterne Froide |
| plateforme | Switch / PS5 / PC | Switch |
| genre | texte | Aventure |
| dureeEstimee | heures | 8 |
| statut | à jouer / en cours / terminé / abandonné | à jouer |
| dateAjout | date | 28-11-2025 |
| resume | 1 phrase | « Une gardienne de phare explore une île gelée pour rallumer la lumière. » |
| jaquette | image | lanterne-02.webp |

## 4. Écrans

- **Écran 1 :** Bibliothèque
- **Écran 2 :** Fiche d'un jeu
- **Écran 3 :** En cours

### Écran 1 — Bibliothèque

- **On y voit :** une grille de grandes jaquettes, un compteur du nombre de jeux affichés, les filtres en bas de l'écran.
- **On peut y faire :** filtrer par plateforme, statut, genre et durée, rechercher par titre, trier les résultats.
- **Bouton principal :** une jaquette, qui ouvre la fiche du jeu.

### Écran 2 — Fiche d'un jeu

- **On y voit :** la jaquette, le titre, le résumé, la plateforme, le genre et la durée estimée.
- **On peut y faire :** changer le statut du jeu, revenir à la bibliothèque.
- **Bouton principal :** « Passer en cours ».

### Écran 3 — En cours

- **On y voit :** les jeux commencés, avec leur jaquette et leur plateforme.
- **On peut y faire :** ouvrir la fiche d'un jeu pour le terminer ou l'abandonner.
- **Bouton principal :** une jaquette, qui ouvre la fiche pour reprendre le jeu.

## 5. Ambiance Visuelle

**Rétro, ludique, lisible.**

Comme l'écran de sélection de jeu d'une console 16 bits : des bordures et des icônes en pixels, des couleurs franches sur fond sombre. L'effet rétro reste dans les détails, pour que la lecture reste confortable sur téléphone.

## 6. Palette

- **Fond :** bleu nuit très sombre
- **Texte :** blanc cassé
- **Accent :** jaune vif, comme un curseur de menu
- **Attention / erreur :** rouge corail

(Couleurs en mots pour l'instant ; hex en s7-s9.)

## 7. Contraintes Techniques & Ergonomiques

- **Approche :** Mobile First (largeur de référence 390 px), boutons principaux dans la zone du pouce.
- **Technologie :** Vanilla HTML5 sémantique, CSS moderne avec variables, JavaScript natif sans bibliothèque.
- **Accessibilité :** ratios de contraste WCAG AA (≥ 4,5:1), navigation clavier assurée, texte alternatif sur chaque jaquette.
- **Stockage :** données dans un fichier JSON local, statuts modifiés dans le localStorage, aucun serveur.

## 8. Interdits

- Pas de Bootstrap, pas de React, pas de compte obligatoire pour consulter.
- Pas de police pixel pour le texte courant : elle est réservée aux titres, le reste utilise une police lisible.
- Pas d'animation qui clignote ni de son automatique.
- Pas de synchronisation avec Steam, PSN, Nintendo ou Epic.
- Pas de partie sociale (amis, partage, avis), pas de prix ni d'achat.
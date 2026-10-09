# M291 · Tests utilisateurs — PICKR

**App testée : PICKR**

**Testeur : Lucas Domingues (moi-même)**

**Observateur : Julie Guichard**

**Plateforme testées : Version mobile (version desktop testée par moi-même)**

## Audit accessibilité

Avant de passer aux tests utilisateurs, j'ai moi-même testé le contraste du site, et l'audit d'accessibilité.
Sur chrome et firefox pas de problème la navigation sans souris marche parfaitement. Sur Safari j'ai d'abord pensé à un problème mais c'est juste la navigation qui est différente c'est option + Tab pour avancer et option + SHIFT + Tab pour reculer. Aucun problème notable, on peut passer à la suite.

## Test des 5 secondes
"C'est une app pour ranger ses jeux." Julie Guichard
Pas d'écart avec l'intention 

## Test de localisation 
Je lui ai demandé de me séléctionner un jeux sur la switch, en cours, qui fait moins de 10h.
Elle a réussi sans soucis, mais il n'y avait pas de jeux disponible. Le message élargir à 20h est apparu, elle a dit que c'était clair et facile d'utilisation. J'ai pas eu besoin de l'aider.

## Test avancé (5minutes)
Je vais lui demander de me chercher un jeu sur pc de plus de 40h auquel je n'ai pas joué (à jouer) de le sélectionner et de le passer dans en cours et de revenir et de le trouver à l'accueil avec le filtre en cours.

Dans la globalité elle a réussi l'exercice sans trop de difficultées. 
Points sur lequels elle a galéré : Le filtre de temps (+40h), vu que les filtres de temps sont (<5h, <10h, <20h, Toutes) ce n'est pas hyper clair. Je rajouterai un filtre (>20h) pour les jeux longs. Pour les filtres de tri je peux aussi les améliorer. Pour l'instant les filtres sont (Plus récents, Plus courts d'abord et Titres de A à Z), je pourrais ajouter un filtre (Plus longs d'abord) et je ne suis pas sur que le filtre (Titres de A à Z) soit très pertinent. Pour le reste elle a réussi sans problème.

**Hésitations/clics infructueux:**  Elle a cliqué sur le filtre de tri mais n'a appuié sur aucun filtre (filtres pas clairs ou utiles), Elle a passé au moins 10secondes sur le filtre de durée (à changer impérativement rajouter des filtres et simplifier)

**Couleur bouton principal:** #FFD23F (12.59:1) de ration par rapport au background.

## Correctifs prioritaires

### 1. Filtre Durée : passer de seuils à des tranches

**Constat :** les options « < 5 h, < 10 h, < 20 h, Toutes » ne permettent que de chercher des jeux courts. Pour la consigne « plus de 40 h », la testeuse est restée au moins 10 s sur le panneau Durée sans trouver d'option qui convienne.

**Correctif :** remplacer les seuils par des tranches qui couvrent toutes les durées, de 2 à 80 h : <10h, 10h-20h, 20-40h, >40h, Toutes. Les mêmes libellés sont utilisés dans le panneau et sur la puce (« >40h ▾ »). La tâche de Kevin (<10h) reste en un toucher. Le bouton de l'état vide propose la tranche voisine (« Élargir à 10h-20h »).

**Critère de réussite au prochain test :** la tranche « >40h » est choisie du premier coup, en moins de 3 s.

### 2. Tri : des options utiles et visibles

**Constat :** la testeuse a ouvert le panneau Tri puis l'a refermé sans rien choisir. Aucune option ne correspondait à son besoin (trouver un jeu long), et la puce affiche toujours « Tri ▾ », quel que soit le tri actif.

**Correctif :**
- remplacer « Titre de A à Z » par « Plus longs d'abord ». Pour trouver un jeu par son nom, la recherche par titre suffit déjà.
- les options deviennent : Plus récents · Plus courts d'abord · Plus longs d'abord.
- la puce affiche le tri actif (« Récents ▾ », « Courts ▾ », « Longs ▾ »), comme les autres filtres affichent leur valeur.

**Critère de réussite au prochain test :** le tri est utilisé quand il sert la tâche, et la testeuse peut dire quel tri est actif sans ouvrir le panneau.



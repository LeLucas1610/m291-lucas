# États & transitions — PICKR

Ce fichier documente les 4 micro-interactions clés de PICKR : ce que l'utilisateur voit entre deux écrans ou pendant une action. Il complète les wireframes du même dossier (`01-accueil-mobile.png`, `02-recherche-filtre.png`, `03-detail-mobile.png`, `desktop-1440.png`).

Les schémas restent en basse fidélité, comme les wireframes : des boîtes et des mots, sans couleur. Les couleurs viendront avec la palette du brief (s7-s9).

| # | Micro-interaction | Où | Déclencheur |
|---|---|---|---|
| 1 | Carte : repos → survol / appui | Accueil, Vue filtrée | souris sur la carte (desktop), doigt sur la carte (mobile) |
| 2 | Retour de la fiche vers la liste | Fiche détaillée → Accueil / Vue filtrée | toucher « ← Retour » ou le bouton Retour du téléphone |
| 3 | Panneau Statut / Durée en superposition | Accueil, Vue filtrée (mobile) | toucher une puce avec ▾ |
| 4 | Changement de statut | Fiche détaillée | toucher « Passer en « En cours » » |

---

## 1. Carte : repos → survol / appui

Sur desktop, la souris peut survoler une carte avant de cliquer. Sur mobile, le survol n'existe pas : on montre l'état appuyé, pendant que le doigt touche la carte.

### Schéma

```
   REPOS                    SURVOL (desktop)          APPUI (mobile)
┌──────────────────┐     ┌──────────────────┐      ┌──────────────────┐
│ ╲              ╱ │     │ ╲              ╱ │▓     │ ╲              ╱ │
│   ╲   IMAGE  ╱   │     │   ╲   IMAGE  ╱   │▓     │   ╲   IMAGE  ╱   │
│   ╱          ╲   │     │   ╱          ╲   │▓     │   ╱          ╲   │
│ ╱              ╲ │     │ ╱              ╲ │▓     │ ╱              ╲ │
├──────────────────┤     ├──────────────────┤▓     ├──────────────────┤
│ Lanterne Froide  │     │ Lanterne Froide  │▓     │▒Lanterne Froide▒▒│
│ Switch·Aventure  │     │ Switch·Aventure  │▓     │▒Switch·Aventure▒▒│
│ [À jouer]        │     │ [À jouer]  Voir →│▓     │▒[À jouer]▒▒▒▒▒▒▒▒│
└──────────────────┘     └──────────────────┘▓     └──────────────────┘
                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 bordure fine            carte soulevée de 4 px    fond grisé
                         + ombre + « Voir → »      pendant le toucher
                         curseur : main
```

### Règles

- **Repos :** bordure fine, pas d'ombre.
- **Survol (desktop) :** la carte monte de 4 px et prend une ombre portée. Le texte « Voir → » apparaît en bas à droite pour confirmer que la carte est cliquable. Curseur en forme de main.
- **Appui (mobile) :** le bas de la carte se grise pendant le toucher, pour confirmer que le doigt a bien touché la carte.
- **Durée :** 150 ms, transition douce. Au-delà de 200 ms, l'interface paraît lente.
- **Toute la carte est cliquable**, pas seulement le titre.

### Notes pour le code

- Le survol est placé dans `@media (hover: hover)`. Sans ça, sur certains téléphones, l'effet de survol reste « collé » après le toucher.
- Carte = un lien `<a>` qui englobe toute la carte, pour que le clic et la navigation clavier fonctionnent sans JavaScript.

```css
.carte { transition: transform 150ms ease, box-shadow 150ms ease; }

@media (hover: hover) {
  .carte:hover { transform: translateY(-4px); box-shadow: 0 6px 12px rgb(0 0 0 / .2); }
}

.carte:active { background: var(--gris-clair); }
```

---

## 2. Retour de la fiche vers la liste

Kevin a filtré sa liste, a fait défiler jusqu'à un jeu et a ouvert sa fiche. Quand il touche « ← Retour », il doit retrouver la liste exactement comme il l'a laissée. Sinon, il revient en haut d'une liste non filtrée et doit tout refaire, ce qui casse son objectif de choisir en moins d'une minute.

### Schéma

```
   LISTE FILTRÉE             FICHE                     RETOUR

┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│ PICKR            │      │ ← Retour         │      │ PICKR            │
│ 3 jeux · Switch… │      │ ┌───────────────┐│      │ 3 jeux · Switch… │
│ ┌───────────────┐│      │ │     IMAGE     ││      │ ┌───────────────┐│
│ │Lanterne Froide││      │ └───────────────┘│      │ │Lanterne Froide││
│ └───────────────┘│      │ Rail Nocturne    │      │ └───────────────┘│
│ ┌───────────────┐│      │ [Statut: À jouer]│      │ ╔═══════════════╗│
│ │Rail Nocturne  ││      │ Plateforme Switch│      │ ║Rail Nocturne  ║│
│ └───────────────┘│      │ Durée 6 h        │      │ ╚═══════════════╝│
│ ┌───────────────┐│      │ …                │      │ ┌───────────────┐│
│ │Petite Forge   ││      │                  │      │ │Petite Forge   ││
│ └───────────────┘│      │ [Passer en cours]│      │ └───────────────┘│
│                  │      │                  │      │                  │
│ [À jouer▾][<10h▾]│      │                  │      │ [À jouer▾][<10h▾]│
└──────────────────┘      └──────────────────┘      └──────────────────┘
 Kevin a défilé            touche « ← Retour »       mêmes filtres, même
 jusqu'à Rail Nocturne                               position, carte vue
 et l'ouvre                                          mise en évidence 1,5 s
```

### Règles

- **Les filtres sont conservés :** plateforme, statut, durée, genre, tri et texte de recherche. Les puces actives et la ligne de résultat sont identiques à l'aller.
- **La position de défilement est conservée :** la carte du jeu consulté est à l'écran, à peu près là où Kevin l'a touchée.
- **La carte consultée est mise en évidence** par un contour épais pendant 1,5 s, puis revient à l'état normal. Kevin repère d'un coup d'œil où il en était.
- **Le focus clavier revient sur cette carte.** Au clavier, la navigation reprend là où elle s'était arrêtée, pas en haut de la page.
- **Le bouton « Retour » du téléphone** (ou du navigateur) fait exactement la même chose que « ← Retour ».
- **Cas particulier : le statut a changé sur la fiche.** Si Kevin a passé le jeu en « En cours » alors que le filtre est « À jouer », le jeu ne correspond plus au filtre. La carte disparaît de la liste, le compteur passe de 3 à 2 jeux, et la liste se place sur la carte suivante. Le filtre reste la règle : on n'affiche pas un jeu qui n'y correspond plus.
- **Mouvement réduit :** le contour apparaît sans fondu et disparaît au bout de 1,5 s.

### Notes pour le code

- **Les filtres vont dans l'URL** (`index.html?plateforme=switch&statut=a-jouer&duree=10`). Au retour, la page relit l'URL et réapplique les filtres. Bonus : l'historique du navigateur fonctionne sans code en plus.
- **L'`id` du dernier jeu ouvert va dans le `sessionStorage`**, effacé à la fermeture de l'onglet. Au retour, après avoir affiché la liste, on place cette carte à l'écran, on lui donne le focus et la classe de mise en évidence.
- **« ← Retour » appelle `history.back()`** si l'utilisateur vient de la liste, sinon il renvoie vers `index.html` (cas d'un lien de fiche ouvert directement).

```js
// sur la liste, après l'affichage des cartes
const dernier = sessionStorage.getItem("dernier-jeu");
const carte = dernier && document.querySelector(`[data-id="${dernier}"]`);
if (carte) {
  carte.scrollIntoView({ block: "center" });
  carte.focus({ preventScroll: true });
  carte.classList.add("derniere-vue");
  setTimeout(() => carte.classList.remove("derniere-vue"), 1500);
}
```

---

## 3. Panneau Statut / Durée en superposition (mobile)

Toucher une puce avec ▾ (Statut, Durée, Genre, Tri) ouvre un panneau qui monte du bas de l'écran, par-dessus la liste. L'exemple ci-dessous est le panneau Statut. Le panneau Durée suit exactement la même structure, avec les options < 5 h, < 10 h, < 20 h et Toutes.

### Schéma

```
   AVANT                     PANNEAU OUVERT              APRÈS CHOIX

┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│ PICKR            │      │░░░░░░░░░░░░░░░░░░│      │ PICKR            │
│ [Rechercher…   ] │      │░░░░░░░░░░░░░░░░░░│      │ [Rechercher…   ] │
│ ┌──────────────┐ │      │░░ liste assombrie│      │ 12 jeux · À jouer│
│ │ carte        │ │      │░░ (voile 50 %) ░░│      │ ┌──────────────┐ │
│ │              │ │      │░░░░░░░░░░░░░░░░░░│      │ │ carte        │ │
│ └──────────────┘ │      ├──────────────────┤      │ └──────────────┘ │
│                  │      │      ────        │      │                  │
├──────────────────┤      │ Statut       ✕   │      ├──────────────────┤
│ Filtres          │      │ ( ) Tous         │      │ Filtres · 1 actif│
│(Tous)(Swi)(PS5)… │      │ (•) À jouer      │      │(Tous)(Swi)(PS5)… │
│(Statut▾)(Durée▾)…│      │ ( ) En cours     │      │[À jouer▾](Durée▾)│
└──────────────────┘      │ ( ) Terminé      │      └──────────────────┘
                          │ ( ) Abandonné    │       puce active,
                          │[    Appliquer   ]│       valeur affichée
                          └──────────────────┘
```

### Règles

- **Ouverture :** le panneau monte du bas en 250 ms. Un voile gris à 50 % recouvre la liste pour montrer qu'elle est en arrière-plan.
- **Position :** en bas de l'écran, dans la zone du pouce, comme la barre de filtres. Kevin choisit sans changer de prise.
- **Contenu :** un titre (« Statut »), un bouton de fermeture ✕, les options sous forme de boutons radio de 48 px de haut, un bouton « Appliquer » pleine largeur.
- **Option « Tous » :** elle désactive le filtre. La puce redevient « Statut ▾ », inactive.
- **Fermer sans rien changer :** toucher le ✕, toucher le voile, ou appuyer sur Échap au clavier. Le filtre précédent reste en place.
- **Après « Appliquer » :** le panneau redescend, la puce passe en état actif avec la valeur choisie (« À jouer ▾ »), la liste et le compteur se mettent à jour.
- **Focus :** à l'ouverture, le focus va sur le titre du panneau et reste bloqué dans le panneau tant qu'il est ouvert. À la fermeture, il revient sur la puce qui l'a ouvert.
- **Mouvement réduit :** si l'utilisateur a activé « réduire les animations » sur son téléphone, le panneau apparaît sans glisser.

### Notes pour le code

L'élément HTML `<dialog>` ouvert avec `showModal()` gère déjà la fermeture par Échap, le blocage du focus et le voile (`::backdrop`). Pas besoin de bibliothèque.

```css
dialog.panneau { margin: auto 0 0; width: 100%; transition: translate 250ms ease; }
dialog.panneau::backdrop { background: rgb(0 0 0 / .5); }

@media (prefers-reduced-motion: reduce) {
  dialog.panneau { transition: none; }
}
```

---

## 4. Changement de statut

C'est la fin réussie du user flow : Kevin passe un jeu en « En cours » depuis la fiche détaillée. Sans retour visuel, il ne sait pas si son action a été prise en compte.

### Schéma

```
   AVANT                     JUSTE APRÈS (≈ 3 s)         ENSUITE

┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│ ← Retour         │      │ ← Retour         │      │ ← Retour         │
│ ┌──────────────┐ │      │ ┌──────────────┐ │      │ ┌──────────────┐ │
│ │    IMAGE     │ │      │ │    IMAGE     │ │      │ │    IMAGE     │ │
│ └──────────────┘ │      │ └──────────────┘ │      │ └──────────────┘ │
│ Lanterne Froide  │      │ Lanterne Froide  │      │ Lanterne Froide  │
│ [Statut: À jouer]│      │ [Statut:En cours]│      │ [Statut:En cours]│
│ Plateforme Switch│      │ Plateforme Switch│      │ Plateforme Switch│
│ …                │      │ …                │      │ …                │
│                  │      │┌────────────────┐│      │                  │
│                  │      ││✓ Passé en cours││      │                  │
│                  │      ││       Annuler  ││      │                  │
├──────────────────┤      │└────────────────┘│      ├──────────────────┤
│[Passer en        │      ├──────────────────┤      │[Marquer comme    │
│ « En cours »    ]│      │[Marquer comme    │      │ terminé         ]│
│[Terminé][Abandon]│      │ terminé         ]│      │[À jouer][Abandon]│
└──────────────────┘      │[À jouer][Abandon]│      └──────────────────┘
                          └──────────────────┘
```

### Règles

- **Le badge change** tout de suite : « Statut : À jouer » devient « Statut : En cours ».
- **Un message de confirmation** apparaît au-dessus des boutons : « ✓ Passé en cours », avec un lien « Annuler ». Il disparaît après environ 3 secondes. Il se place au-dessus des boutons pour ne pas cacher le bouton principal.
- **« Annuler »** remet le statut précédent. Un toucher accidentel se corrige sans chercher le bon bouton.
- **Les boutons s'adaptent au nouveau statut :** le bouton principal propose l'étape suivante logique (« Marquer comme terminé »), les boutons secondaires proposent les autres statuts (« À jouer », « Abandonné »).
- **Le changement est enregistré** dans le navigateur. De retour sur la liste, la carte affiche le badge « En cours », et le jeu apparaît quand on filtre Statut → En cours.
- **Pas de fenêtre « Êtes-vous sûr ? » :** le changement est sans danger et réversible avec « Annuler ». Une confirmation ajouterait un toucher pour rien.

### Notes pour le code

- Le message est dans une zone `aria-live="polite"` : un lecteur d'écran l'annonce sans que l'utilisateur doive y aller (WCAG 4.1.3 « Messages d'état »).
- Le statut est enregistré dans le localStorage avec l'`id` du jeu comme clé. Le JSON n'est jamais modifié, comme le prévoit le brief.

```js
function changerStatut(id, nouveau) {
  const ancien = lireStatut(id);
  localStorage.setItem(`statut-${id}`, nouveau);
  afficherFiche(id);
  annoncer(`✓ Passé en ${nouveau}`, () => changerStatut(id, ancien)); // bouton Annuler
}
```

---

## Règle commune : indicateur de focus

Cette règle s'applique à tous les éléments cliquables : recherche, puces, cartes, boutons, liens. Quand on navigue au clavier (touche Tab), l'élément actif doit être clairement visible (WCAG 2.4.7 « Visibilité du focus », niveau AA, imposé par le brief).

```
 SANS FOCUS                AVEC FOCUS (Tab)
┌────────────────────┐    ╔══════════════════════╗
│ Rechercher un jeu… │    ║┌────────────────────┐║
└────────────────────┘    ║│ Rechercher un jeu… │║
                          ║└────────────────────┘║
                          ╚══════════════════════╝
```

- **Même indicateur partout :** un contour de 3 px, décalé de 2 px, pour rester visible même sur une puce active à fond sombre.
- **Contraste d'au moins 3:1** avec le fond (WCAG 1.4.11). Sur la palette du brief : le jaune d'accent sur le bleu nuit.
- **Seulement au clavier :** `:focus-visible`, pas `:focus`. Le contour n'apparaît ni au clic ni au toucher.
- **Jamais caché par la barre de filtres fixe** (WCAG 2.4.11 « Focus non masqué ») : on réserve sa hauteur au défilement.

```css
:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
html { scroll-padding-bottom: 180px; } /* hauteur de la barre de filtres + marge */
```

---

## Récapitulatif des durées

| Interaction | Durée | Réduit si « réduire les animations » |
|---|---|---|
| Survol / appui d'une carte | 150 ms | oui (pas de déplacement) |
| Mise en évidence de la carte au retour | 1,5 s | oui (sans fondu) |
| Apparition du focus | immédiate | — |
| Ouverture / fermeture du panneau | 250 ms | oui (apparition directe) |
| Message de confirmation | visible ~3 s | non (pas une animation) |
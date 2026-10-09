# Contrastes et lisibilité — PICKR

**Design retenu :** Piste C · Moderne & pragmatique (fond bleu nuit, texte blanc cassé, jaune réservé à l'action).

**Méthode :** ratios calculés avec la formule de luminance relative des WCAG 2.2, à partir des couleurs exactes du CSS. Ils sont vérifiables avec WebAIM Contrast Checker ou l'inspecteur de contraste des DevTools de Chrome.

**Seuils (WCAG 2.2, niveau AA) :**
- texte normal : 4,5:1 (critère 1.4.3) ;
- grand texte (≥ 24 px, ou ≥ 18,66 px en gras) : 3:1 ;
- composants d'interface (contours, focus, états) : 3:1 (critère 1.4.11).

## Vérification

- [x] contraste titre / fond mesuré
- [x] contraste texte / fond mesuré
- [x] contraste bouton / fond mesuré
- [x] pas d'info seulement en couleur
- [x] on devine l'ordre de lecture

## 1. Titres / fond

| Élément | Texte | Fond | Ratio | Seuil | Résultat |
|---|---|---|---|---|---|
| Logo PICKR (h1) | #F3EFE4 | #0D1528 | 15,8:1 | 3:1 | ✅ |
| Titre de carte (h3, 18,4 px gras) | #F3EFE4 | #142038 | 14,1:1 | 4,5:1 | ✅ |
| Titre de la fiche (h1) | #F3EFE4 | #0D1528 | 15,8:1 | 3:1 | ✅ |
| Titre du panneau (h2) | #F3EFE4 | #142038 | 14,1:1 | 3:1 | ✅ |
| Message « aucun résultat » (corail) | #FF7A6B | #142038 | 6,4:1 | 4,5:1 | ✅ |

### Titres sur les jaquettes (24,8 px gras = grand texte)

| Teinte | Titre blanc sur couleur | Titre blanc sur bande sombre | Seuil | Résultat |
|---|---|---|---|---|
| Bleu #2F57B8 / #13275A | 6,6:1 | 14,3:1 | 3:1 | ✅ |
| Violet #8A3FA0 / #44185A | 6,4:1 | 13,8:1 | 3:1 | ✅ |
| Vert #18806F / #0A3D35 | 4,8:1 | 12,1:1 | 3:1 | ✅ |
| Rouge #C2462E / #621B0F | 5,0:1 | 12,5:1 | 3:1 | ✅ |
| Indigo #5A4FCF / #251F6B | 6,1:1 | 14,1:1 | 3:1 | ✅ |
| Ocre #A06B12 / #4A3108 | 4,6:1 | 12,1:1 | 3:1 | ✅ |

## 2. Texte / fond

| Élément | Texte | Fond | Ratio | Seuil | Résultat |
|---|---|---|---|---|---|
| Texte courant (résumé, valeurs de la fiche) | #F3EFE4 | #0D1528 | 15,8:1 | 4,5:1 | ✅ |
| Texte secondaire (« Switch · Aventure · 8 h ») | #AAB4C8 | #142038 | 7,8:1 | 4,5:1 | ✅ |
| Texte secondaire sur fond de page | #AAB4C8 | #0D1528 | 8,7:1 | 4,5:1 | ✅ |
| Placeholder « Rechercher un jeu… » | #AAB4C8 | #142038 | 7,8:1 | 4,5:1 | ✅ |
| Liens jaunes (« Effacer ») | #FFD23F | #0D1528 | 12,6:1 | 4,5:1 | ✅ |
| Étiquette plateforme sur jaquette | #F3EFE4 | #0D1528 | 15,8:1 | 4,5:1 | ✅ |

## 3. Boutons / fond

| Élément | Couleurs | Ratio | Seuil | Résultat |
|---|---|---|---|---|
| Texte du bouton principal | #0D1528 sur #FFD23F | 12,6:1 | 4,5:1 | ✅ |
| Bouton principal par rapport au fond | #FFD23F contre #0D1528 | 12,6:1 | 3:1 | ✅ |
| Contour des boutons secondaires | #F3EFE4 contre #142038 | 14,1:1 | 3:1 | ✅ |
| Contour des puces de filtre | #6A7DA3 contre #0D1528 | 4,4:1 | 3:1 | ✅ |
| Contour du champ de recherche | #6A7DA3 contre #0D1528 | 4,4:1 | 3:1 | ✅ |
| Puce active (texte) | #0D1528 sur #F3EFE4 | 15,8:1 | 4,5:1 | ✅ |
| Puce active par rapport au fond | #F3EFE4 contre #0D1528 | 15,8:1 | 3:1 | ✅ |
| Contour de focus | #FFD23F contre #0D1528 | 12,6:1 | 3:1 | ✅ |
| Message de confirmation (toast) | #0D1528 sur #F3EFE4 | 15,8:1 | 4,5:1 | ✅ |
| Badge « À jouer » (contour) | #6A7DA3 contre #142038 | 3,9:1 | 3:1 | ✅ |
| Badge « En cours » (texte) | #0D1528 sur #F3EFE4 | 15,8:1 | 4,5:1 | ✅ |
| Badge « Abandonné » (texte et pointillés) | #FF7A6B sur #142038 | 6,4:1 | 4,5:1 | ✅ |
| Badge « Terminé » (texte) | #F3EFE4 sur #2C3B5A | 9,7:1 | 4,5:1 | ✅ |
| **Badge « Terminé » par rapport à la carte** | #2C3B5A contre #142038 | **1,5:1** | 3:1 | ❌ à corriger | 
| Bordure des cartes | #2C3B5A contre #0D1528 | 1,6:1 | 3:1 | ⚠️ non bloquant |

La bordure des cartes n'est pas indispensable pour repérer une carte : la jaquette et le titre suffisent à l'identifier, donc le critère 1.4.11 ne s'applique pas à cette bordure.

## 4. Pas d'information seulement en couleur

| Information | Indice de couleur | Autre indice | Résultat |
|---|---|---|---|
| Statut d'un jeu | couleur du badge | le mot écrit (« À jouer », « En cours »…) + forme différente : contour, plein, pointillés | ✅ |
| Plateforme choisie | puce claire | texte en gras, ligne « Filtres · 3 actifs », résumé « 3 jeux · Switch · … » | ✅ |
| Filtres Statut / Durée / Genre actifs | puce claire | la valeur remplace le libellé (« À jouer ▾ », « < 10 h ▾ ») | ✅ |
| Aucun résultat | bordure corail | message écrit + bouton « Élargir à 10 h » | ✅ |
| Action principale | jaune | texte du bouton, pleine largeur, en bas de l'écran | ✅ |
| Élément sélectionné au clavier | contour jaune | contour épais de 3 px + curseur ▶ devant le titre des cartes | ✅ |
| Changement de statut | — | message « ✓ Passé en cours » + badge mis à jour | ✅ |
| Desktop : filtre actif dans la barre latérale | — | texte en gras + barre à gauche du menu déroulant | ✅ |

## 5. Ordre de lecture

L'ordre visuel suit l'ordre du code HTML, vérifié à la touche Tab.

**Mobile (390 px) :** PICKR → nombre de jeux → recherche → ligne de résultat → cartes (jaquette, titre, infos, statut) → barre de filtres en bas.

**Desktop (1440 px) :** en-tête (PICKR, recherche, nombre de jeux) → barre latérale de filtres → titre « 50 jeux » et tri → grille de cartes, de gauche à droite puis de haut en bas.

**Fiche :** Retour → jaquette → titre → statut → plateforme, genre, durée, date → résumé → bouton « Passer en « En cours » » → Terminé / Abandonné.

**Structure des titres :**
- desktop : h1 PICKR → h2 Filtres → h2 « 50 jeux » → h3 titres des cartes ✅ ;
- mobile sans filtre actif : h1 → h3, car le h2 de la ligne de résultat est masqué ⚠️.

## À corriger

1. **Badge « Terminé » (1,5:1)** : reprendre le principe des badges de la Piste B, avec un fond propre à chaque statut et le texte toujours présent. Le texte reste en #0D1528.

   | Badge | Fond proposé | Texte / fond | Badge / carte |
   |---|---|---|---|
   | À jouer | #8FB3FF | 8,7:1 | 7,8:1 |
   | En cours | #7EE0C3 | 11,5:1 | 10,3:1 |
   | Terminé | #C9D1E0 | 11,8:1 | 10,6:1 |
   | Abandonné | transparent, pointillés corail #FF7A6B | 6,4:1 | 6,4:1 |

2. **Titre h2 masqué sur mobile** : remplacer `display: none` par la classe `.vh` (masqué à l'écran mais lu par les lecteurs d'écran), pour garder la suite h1 → h2 → h3.
3. **Accès clavier aux filtres sur mobile** : la barre de filtres arrive après les 50 cartes dans l'ordre de tabulation. Ajouter un lien d'évitement « Aller aux filtres » en haut de la page.

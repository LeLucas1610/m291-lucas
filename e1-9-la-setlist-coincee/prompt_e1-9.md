Je joins `setlist.html` (exercice e1-9, module M291). C'est une setlist de 5 groupes censée être réordonnable par glisser-déposer (API HTML5 Drag and Drop, JS natif, sans librairie). En pratique, rien ne bouge quand je lâche une ligne.

1. **Bug** : quand je glisse une ligne et que je la lâche sur une autre, elle reprend sa place et rien ne bouge (le `console.log("dépôt…")` ne s'affiche jamais). J'attendais qu'elle s'insère à l'endroit du dépôt pour pouvoir trier les groupes de 18:00 à 22:30.

2. **Ce que je te demande, dans cet ordre** :
   - D'abord, explique-moi pourquoi ça ne marche pas, cause par cause, sans me donner de code corrigé.
   - Ensuite seulement, donne-moi le correctif.
   - Enfin, donne-moi une procédure de vérification.

3. **Correctif** :
   - Pour chaque cause, indique la ligne concernée, ce qu'elle fait réellement et pourquoi ça bloque.
   - Corrige uniquement les lignes nécessaires dans le `<script>`. Ne réécris pas le fichier et ne touche ni au HTML ni au CSS.
   - Garde les noms de variables et les `console.log` existants.
   - Présente chaque modification en « avant / après ».

4. **Vérification** : teste le fichier original et le fichier corrigé.
   - Confirme qu'on peut obtenir l'ordre 18:00 → 19:00 → 20:10 → 21:40 → 22:30, y compris en plaçant une ligne en dernière position.
   - Donne-moi les gestes à reproduire dans le navigateur.

Appuie tes explications sur la documentation MDN. Livre-moi le `setlist.html` corrigé en fichier téléchargeable.
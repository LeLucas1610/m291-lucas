# Journal M291
# Semaine 1
- repo créé sur le site
- clone dans VS Code

# Semaine 2
## Journal du jeu du prompt
* Manche 1 — trop vague
Prompt : change le bouton
Ce que l’IA a fait : A changer la couleur du bouton et a rajouter un hover
Pourquoi c’est un problème : Je n'ai pas pu choisir la couleur ni les différents changements qu'il a fait.

* Manche 2 — précis
Prompt : (celui du cours)
Résultat : le bouton devient orange au clic 
Explication que je retiens : On a besoin de l’id "magic" pour sélectionner précisément le bouton que l’on veut modifier.

* Manche 3 — autre outil (e1-5b)

Outil A (e1-5) : ChatGPT
Outil B (aujourd’hui) : Gemini
| Critère | Outil A | Outil B |
| --- | --- | --- |
| A-t-il expliqué avant le code ? | oui | oui |
| A-t-il touché uniquement #magic ? | oui | oui |
| A-t-il ajouté Bootstrap / une librairie ? | non | non |

1. A et B font la même chose au clic : le bouton devient orange avec un texte blanc.

2. Dans A, on crée d’abord une variable magic qui représente le bouton, puis on l’utilise.

3. Dans B, on récupère directement le bouton avec document.getElementById('magic') et this représente le bouton cliqué.

4. Pour un débutant, A est plus simple à lire, car le nom magic montre clairement quel élément on modifie.

5. Critère : je privilégie le code qui permet de comprendre facilement quel élément est manipulé et quelle action est effectuée, sans devoir connaître this.

## Ce que je changerais la prochaine fois
Prendre le temps de faire un bon prompt dès le départ et corriger ensuite.
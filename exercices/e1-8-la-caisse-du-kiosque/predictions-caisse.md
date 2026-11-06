## Scénario 1
Je pense que l’écran va montrer : 06 CHF -> pas 6CHF car 0 est un num et 6 est de type string, ils vont donc juste se concaténer mais pas s'additionner 

## Scénario 2
Je pense que l’écran va montrer : 064 CHF -> pour la même raison qu'avant

## Scénario 3
Non car la fonction promo va modifier seulement le premier nombre qui est de type num et pas le deuxième qui est de type string

## Scénario 4
ça va afficher 066CHF car on vide l'affichage mais pas la variable total donc ça va à chaque fois garder le numéro en mémoire même si on vide le panier 
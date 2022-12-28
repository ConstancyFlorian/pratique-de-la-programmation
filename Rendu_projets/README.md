CONSTANCY Florian
MAIGNAN Jérémy
LEFEBVRE Therry

Atelier : Pratique de la programmation
Présentation du projet

Pour ce projet de programmation nous avons utilisé une API qui donne en temps réel les données sur le trafic aérien mondial. L’objectif de ce projet est de produire des variations à partir de ces données. Grâce à au flux de ces données, le programme produira des sons différents.
Le programme que nous avons créer permet d’utiliser des informations d’un simulateur de vol de trafic aérien qui par la suite avec le logiciel Puredata nous permet de faire des variations sur un moduleur de fréquence.

Procédure du programme :

1) Pour lancer le programme il faut ouvrir le dossier « projetavion.pd » sur Puredata, il est nécessaire de baisser à 30% le volume de votre son.

2) Après il faut ouvrir le dossier «CONSTANCY Florian-MAIGNAN Jérémy-LEFEBVRE Therry-projetavion api» dans le CMD.

3) Utiliser la fonction « node » pour le lancer en précisant le fichier « avionApi. JS » qu'il faut ouvrir ( node .\avionApi.js ).

4) Puis sur pure data le programme se lancera automatiquement avec un visuel celui-ci sera interactif avec la voix. Elle permettra de faire monter ou descendre un des carré selon l'intensité de celle-ci.

5) Appuyer sur le bouton start pour lancer la modulation de fréquence. La variation se fera avec les données du « .JS » et votre souris permettra de modifier la hauteur des fréquences.

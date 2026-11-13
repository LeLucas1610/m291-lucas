const conteneur = document.getElementById("liste-cartes");

// Classes existantes du CSS, utilisées à tour de rôle pour les jaquettes
const couleurs = ["bleu", "vert", "ocre", "violet", "indigo", "brique"];
const motifs = ["motif-trame", "motif-damier", "motif-rayures"];

// Statut du JSON → classe du badge dans le CSS
const classesStatut = {
  "à jouer": "a-jouer",
  "en cours": "en-cours",
  "terminé": "termine",
  "abandonné": "abandonne"
};

// État 1 — Chargement
conteneur.innerHTML = "<p class='etat-chargement'>Chargement des données en cours...</p>";

fetch("../data.json")
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error("Erreur de chargement : " + reponse.status);
    }
    return reponse.json();
  })
  .then(function (donnees) {
    // État 3 — Vide
    if (donnees.length === 0) {
      conteneur.innerHTML = "<p class='etat-vide'>Aucun lieu enregistré pour le moment.</p>";
      return;
    }
    // État 2 — Succès
    conteneur.innerHTML = donnees.map(function (item, index) {
      const couleur = couleurs[index % couleurs.length];
      const motif = motifs[index % motifs.length];
      const statutAffiche = item.statut.charAt(0).toUpperCase() + item.statut.slice(1);

      return `
        <article class="carte">
          <div class="jaquette jaquette--${couleur} ${motif}" role="img" aria-label="Jaquette de ${item.titre}">
            <span class="jaquette__plateforme">${item.plateforme}</span>
            <span class="jaquette__titre">${item.titre}</span>
          </div>
          <div class="carte__corps">
            <h3 class="carte__titre"><a class="carte__lien" href="fiche.html?id=${item.id}">${item.titre}</a></h3>
            <p class="carte__meta">${item.plateforme} · ${item.genre} · ${item.dureeEstimee} h</p>
            <div class="carte__pied">
              <span class="badge badge--${classesStatut[item.statut]}">${statutAffiche}</span>
              <span class="carte__voir" aria-hidden="true">Voir →</span>
            </div>
          </div>
        </article>
      `;
    }).join("");
  })
  .catch(function (erreur) {
    // État 4 — Erreur
    console.error("Détail technique :", erreur);
    conteneur.innerHTML = "<p class='etat-erreur'>Impossible de charger les données. Veuillez réessayer ultérieurement.</p>";
  });
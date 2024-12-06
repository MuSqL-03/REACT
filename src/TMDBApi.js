const API_TOKEN = "votre_API_KEY_TMDB"; // Remplacez par votre clé d'API

/**
 * Récupère des films depuis l'API TMDB selon un texte et une page
 * @param {string} text - Texte recherché
 * @param {number} page - Numéro de la page des résultats
 * @returns {Promise} - Une promesse contenant les résultats de la recherche
 */
export function getFilmsFromTMdbWithText(text, page) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${encodeURIComponent(text)}&page=${page}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur dans la récupération des données");
      }
      return response.json(); // Retourne le JSON extrait
    })
    .catch((error) => {
      console.error("Erreur API TMDB:", error);
      throw error; // Remonte l'erreur pour une gestion éventuelle en aval
    });
}

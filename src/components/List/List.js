// fichier components/List/List.js
import { useParams } from 'react-router-dom';
import Film from '../Film/Film';
import './List.css';

function List() {
  // Récupérer le paramètre de l'URL
  const { data } = useParams();

  // Données bidon pour les tests
  const films = [
    {
      poster: "../Images/2.png",
      abstract: "Résumé du premier film",
    },
    {
      poster: "../Images/3.jpg",
      abstract: "Résumé du deuxième film",
    },
    {
      poster: "../Images/1.jpg",
      abstract: "Résumé du troisième film",
    },
  ];

  return (
    <div className="container">
      <h2>Liste des films</h2>
      <p>Recherche : {data}</p> {/* Affiche la valeur saisie dans la recherche */}
      <div className="movie-list">
        {films.map((film, index) => (
          <Film key={index} poster={film.poster} abstract={film.abstract} />
        ))}
      </div>
    </div>
  );
}

export default List;

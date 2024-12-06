// fichier components/Search/Search.js
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const form = e.target;
    const formData = new FormData(form);
    const searchValue = formData.get('search'); // Récupère la valeur du champ "search"
    console.log(searchValue); // Affiche la valeur saisie dans la console
    navigate(`/List/${searchValue}`); // Navigue vers la page List avec la valeur comme paramètre
  };

  return (
    <div className="container">
      <h2>Rechercher un film</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Saisir un titre..." />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
}

export default Search;

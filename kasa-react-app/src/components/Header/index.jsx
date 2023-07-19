import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/home">Accueil</Link>
      <Link to="/fiche-logement">Fiches logements</Link>
      <Link to="/a-propos">A propos</Link>
    </nav>
  );
}

export default Header;

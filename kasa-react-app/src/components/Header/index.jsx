import { Link } from 'react-router-dom';
import logo from '../../assets/images/';

function Header() {
  return (
    <div className="header">
      <img
        src="C:\Karine\__Formation\Gits\projet8\kasa-react-app\src\assets\images\LOGO.jpg"
        alt="logo Kasa"
      />
      <nav>
        <Link to="/home">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;

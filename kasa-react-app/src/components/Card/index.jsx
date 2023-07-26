import './index.scss';
import { Link } from 'react-router-dom';

// cardProps = [id , title, cover]
function Card({ cardProps }) {
  return (
    <div className="card">
      <div>
        <img src={cardProps[2]} alt="appartement" className="card__picture" />
      </div>
      <Link to={'/fiche-logement/' + cardProps[0]} className="card__title">
        {cardProps[1]}
      </Link>
    </div>
  );
}

export default Card;

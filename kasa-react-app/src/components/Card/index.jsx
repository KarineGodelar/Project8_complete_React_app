import './index.scss';
import { Link } from 'react-router-dom';

function Card({ cardUrl, cardTitle, cardPicture }) {
  return (
    <div className="card">
      <div>
        <img src={cardPicture} alt="appartement" className="card__picture" />
      </div>
      <Link to={cardUrl} className="card__title">
        {cardTitle}
      </Link>
    </div>
  );
}

export default Card;

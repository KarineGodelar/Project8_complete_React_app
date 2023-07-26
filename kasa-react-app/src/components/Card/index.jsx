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

// function Card({ cardUrl, cardTitle, cardPicture }) {
//   return (
//     <div className="card">
//       <div>
//         <img src={cardPicture} alt="appartement" className="card__picture" />
//       </div>
//       <Link to={cardUrl} className="card__title">
//         {cardTitle}
//       </Link>
//     </div>
//   );
// }

export default Card;

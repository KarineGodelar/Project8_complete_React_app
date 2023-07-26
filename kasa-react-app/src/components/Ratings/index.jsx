import star_active from '../../assets/images/star-active.svg';
import star_inactive from '../../assets/images/star-inactive.svg';
import { useParams } from 'react-router';
import dataTable from '../../data/kasa';

function Rating() {
  const { logementId } = useParams();

  const ratingNumber = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.rating);

  return (
    <div>
      <img src={ratingNumber >= 1 ? star_active : star_inactive} alt="étoile" />
      <img src={ratingNumber >= 2 ? star_active : star_inactive} alt="étoile" />
      <img src={ratingNumber >= 3 ? star_active : star_inactive} alt="étoile" />
      <img src={ratingNumber >= 4 ? star_active : star_inactive} alt="étoile" />
      <img src={ratingNumber >= 5 ? star_active : star_inactive} alt="étoile" />
    </div>
  );
}

export default Rating;

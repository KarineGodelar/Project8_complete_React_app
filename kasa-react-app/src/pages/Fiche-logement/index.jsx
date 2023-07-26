import './index.scss';
import { useParams } from 'react-router';
import dataTable from '../../data/kasa';

function Fiche() {
  const { logementId } = useParams();

  const ficheTitle = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.title);

  return (
    <div className="fiche">
      <div className="fiche__carousel"></div>
      <div className="fiche__text&tags">
        <div className="fiche__text&tags--text">{ficheTitle}</div>
        <div className="fiche__text&tags--tags"></div>
      </div>
      <div className="fiche__host&rating">
        <div className="fiche__host&rating--rating"></div>
        <div className="fiche__host&rating--host"></div>
      </div>
      <div className="fiche__details"></div>
      <h2>L'id du logement est {logementId}</h2>
    </div>
  );
}

export default Fiche;

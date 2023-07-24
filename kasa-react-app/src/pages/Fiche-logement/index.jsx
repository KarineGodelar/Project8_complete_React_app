import './index.scss';
import { useParams } from 'react-router';

function Fiche() {
  const { logementId } = useParams();
  return (
    <div>
      <h1>Fiche logement</h1>
      <h2>L'id du logement est {logementId}</h2>
    </div>
  );
}

export default Fiche;

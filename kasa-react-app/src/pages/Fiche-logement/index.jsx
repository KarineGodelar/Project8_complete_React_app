import './index.scss';
import { useParams } from 'react-router';
import dataTable from '../../data/kasa';
import Rating from '../../components/Ratings';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';

function Fiche() {
  const { logementId } = useParams();

  const fichePictures = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.pictures);

  const ficheTitle = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.title);

  const ficheLocation = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.location);

  const ficheTagsTable = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.tags);

  const ficheHostName = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.host.name);

  const ficheHostPicture = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.host.picture);

  const descriptionTitle = 'Description';

  const equipmentTitle = 'Équipements';

  const descriptionText = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.description);
  console.log(descriptionText);

  const equipmentText = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) =>
      item.equipments.map((e) => {
        return <li key={e.toString()}>{e}</li>;
      })
    );

  return (
    <div className="fiche">
      <div className="fiche__carousel">
        {' '}
        <Carousel image={fichePictures[0][0]} number={2} />{' '}
      </div>
      <div className="fiche__content">
        <div className="fiche__textntags">
          <div className="fiche__textntags--text">
            <h1 className="fiche__textntags--text--title">{ficheTitle}</h1>
            <h2 className="fiche__textntags--text--location">
              {ficheLocation}
            </h2>
          </div>
          <div className="fiche__textntags--tags"> {ficheTagsTable} </div>
        </div>
        <div className="fiche__hostnrating">
          <div className="fiche__hostnrating--rating">
            <Rating />
          </div>
          <div className="fiche__hostnrating--host">
            <p className="fiche__hostnrating--host-name">{ficheHostName}</p>
            <img
              className="fiche__hostnrating--host-picture"
              src={ficheHostPicture}
              alt="hôte"
            />
          </div>
        </div>
      </div>
      <div className="fiche__details">
        <Collapse titleText={descriptionTitle} text={descriptionText} />
        <Collapse titleText={equipmentTitle} text={equipmentText} />
      </div>
    </div>
  );
}

export default Fiche;

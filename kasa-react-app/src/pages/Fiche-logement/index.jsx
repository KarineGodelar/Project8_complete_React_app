import './index.scss';
import { useParams } from 'react-router';
import dataTable from '../../data/kasa';
import Rating from '../../components/Ratings';
import Carousel from '../../components/Carousel';

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

  const ficheTags = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.tags);

  const ficheHostName = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.host.name);

  const ficheHostPicture = dataTable
    .filter((logement) => logement.id === logementId)
    .map((item) => item.host.picture);

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
          <div className="fiche__textntags--tags"> {ficheTags} </div>
        </div>
        <div className="fiche__host&rating">
          <div className="fiche__host&rating--rating">
            <Rating />
          </div>
          <div className="fiche__host&rating--host">
            <p className="fiche__host&rating--host-name">{ficheHostName}</p>
            <img
              className="fiche__host&rating--host-picture"
              src={ficheHostPicture}
              alt="hôte"
            />
          </div>
        </div>
      </div>
      <div className="fiche__details"></div>
    </div>
  );
}

export default Fiche;

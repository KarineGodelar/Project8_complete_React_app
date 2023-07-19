import './index.scss';
import backgroundImage from '../../assets/images/image_source_1.png';

function Banner() {
  return (
    <div className="banner">
      <img
        className="banner__background"
        src={backgroundImage}
        alt="paysage de montagne"
      />
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;

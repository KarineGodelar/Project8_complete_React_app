import './index.scss';
import arrow_left from '../../assets/images/arrow_backward.svg';
import arrow_right from '../../assets/images/arrow_forward.svg';

function Carousel({ image, number }) {
  return (
    <div className="carousel">
      <img className="carousel__image" src={image} alt="logement" />
      <img className="arrow arrow--left" src={arrow_left} alt="flèche gauche" />
      <img
        className="arrow arrow--right"
        src={arrow_right}
        alt="flèche gauche"
      />
      <p className="number">{number}</p>
    </div>
  );
}

export default Carousel;

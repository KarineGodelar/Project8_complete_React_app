import './index.scss';
import arrow_left from '../../assets/images/arrow_backward.svg';
import arrow_right from '../../assets/images/arrow_forward.svg';
import { useState } from 'react';

// image = tableau de pictures du logement

function Carrousel({ images }) {
  const [count, setCount] = useState(0);
  console.log(count);
  const imageTable = [];
  images.forEach((element) => {
    return element.forEach((item) => imageTable.push(item));
  });
  const number = 1;

  return (
    <div className="carrousel">
      <img
        className="carrousel__image"
        src={imageTable[count]}
        alt="logement"
      />
      <img
        className="arrow arrow--left"
        src={arrow_left}
        alt="flèche gauche"
        onClick={() => setCount(count > 0 ? count - 1 : count)}
      />
      <img
        className="arrow arrow--right"
        src={arrow_right}
        alt="flèche gauche"
        onClick={() =>
          setCount(count < imageTable.length - 1 ? count + 1 : count)
        }
      />
      <p className="number">{number}</p>
    </div>
  );
}

export default Carrousel;

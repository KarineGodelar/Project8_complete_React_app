import './index.scss';
import arrow from '../../assets/images/arrow-top.svg';

function Collapse() {
  return (
    <div className="collapse">
      <div className="collapse__dropdown">
        <p>Texte de test</p>
        <img src={arrow} alt="flèche" className="collapse__dropdown--arrow" />
      </div>
      <div className="collapse__text"></div>
    </div>
  );
}

export default Collapse;

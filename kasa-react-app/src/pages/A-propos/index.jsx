import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import './index.scss';

function Apropos() {
  const titleText = 'Equipements';
  const text =
    'ceci est une description très longue qui doit faire plusieurs lignes pour que je puisse voir quel interligne il y a dans ce bloc';
  return (
    <div>
      <Banner />
      <Collapse titleText={titleText} text={text} />
    </div>
  );
}

export default Apropos;

import Banner from '../../components/Banner';
import Card from '../../components/Card';
import './index.scss';
import dataTable from '../../data/kasa';

// cardProps = [id , title, cover]

function Home() {
  const cardTable = dataTable.map((item) => [item.id, item.title, item.cover]);
  return (
    <div className="home-container">
      <Banner />
      <div className="cards-container">
        <Card cardProps={cardTable[17]} />
        <Card cardProps={cardTable[1]} />
        <Card cardProps={cardTable[2]} />
        <div className="cards-container-big-screen">
          <Card cardProps={cardTable[3]} />
          <Card cardProps={cardTable[4]} />
          <Card cardProps={cardTable[5]} />
        </div>
      </div>
    </div>
  );
}

export default Home;

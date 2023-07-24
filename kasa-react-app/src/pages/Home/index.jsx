import Banner from '../../components/Banner';
import Card from '../../components/Card';
import './index.scss';
import dataTable from '../../data/kasa';

function Home() {
  const urlTable = [];
  const titleTable = [];
  const pictureTable = [];

  for (let i = 0; i < 6; i++) {
    urlTable[i] = '/fiche-logement/' + dataTable[i].id;
    titleTable[i] = dataTable[i].title;
    pictureTable[i] = dataTable[i].cover;
  }

  return (
    <div className="home-container">
      <Banner />
      <div className="cards-container">
        <Card
          cardUrl={urlTable[0]}
          cardTitle={titleTable[0]}
          cardPicture={pictureTable[0]}
        />
        <Card
          cardUrl={urlTable[1]}
          cardTitle={titleTable[1]}
          cardPicture={pictureTable[1]}
        />
        <Card
          cardUrl={urlTable[2]}
          cardTitle={titleTable[2]}
          cardPicture={pictureTable[2]}
        />
        <div className="cards-container-big-screen">
          <Card
            cardUrl={urlTable[3]}
            cardTitle={titleTable[3]}
            cardPicture={pictureTable[3]}
          />
          <Card
            cardUrl={urlTable[4]}
            cardTitle={titleTable[4]}
            cardPicture={pictureTable[4]}
          />
          <Card
            cardUrl={urlTable[5]}
            cardTitle={titleTable[5]}
            cardPicture={pictureTable[5]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

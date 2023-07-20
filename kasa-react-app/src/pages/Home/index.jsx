import Banner from '../../components/Banner';
import Card from '../../components/Card';
import './index.scss';

function Home() {
  return (
    <div className="home container">
      <Banner />
      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <div className="cards-container-big-screen">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;

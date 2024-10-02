import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <NavBar/>
      <Banner/>
    </div>
  )
}

export default Home
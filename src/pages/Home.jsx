import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import colors from '../styles/colors.js';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home" style={{backgroundColor: colors.text2}}>
      <NavBar/>
      <Banner/>
    </div>
  )
}

export default Home
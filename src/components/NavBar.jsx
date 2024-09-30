import juliusg from '../images/juliusg.png';
import colors from '../styles/colors.js'
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav style={{backgroundColor: colors.background}}>
      <div className="left-side">
        <a href="#"><img src={juliusg} alt="logo" id='logo'/></a>
      </div>

      <div className="right-side">
        <ul className='links'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </div>
    </nav>
  )
};


export default NavBar;
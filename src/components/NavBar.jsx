import juliusg from '../images/juliusg.png';

const NavBar = () => {
  return (
    <nav>
      <div className="left-side">
        <a href="#"><img src={juliusg} alt="logo" /></a>
      </div>

      <div className="right-side">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
      </div>
    </nav>
  )
}


export default NavBar;
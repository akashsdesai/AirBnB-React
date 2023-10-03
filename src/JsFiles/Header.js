import "./CssFiles/Header.css"
import airbnb from "./images/airbnb.png"
import photoGrid from "./images/Group77.png"

function Header(){
  return(
    <header>
      <nav>
        <img src={airbnb} />
      </nav> 
      <div className="Head">
        <div id="photoGrid">
          <img id="photo" src={photoGrid} />
        </div>
        <div id="info">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by 
          one-of-a-kind hosts-all without leaving home.</p>
        </div>
      </div>
     </header>
  )
}

export default Header
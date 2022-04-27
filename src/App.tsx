import "./App.css";
import List from "./components/List";
import Search from "./components/Search"
import Logo from "./additionals/Logo.png"

const title ="React App";

function App ()
{
  return (
    <div> 
      <nav>
        <div>
          <div className="heading">
            <h1>{title}</h1>
            <img src={Logo}/>
          </div>
        </div>
        <Search />
      </nav>
      
       <List/>
    </div>
  );
}

export default App;

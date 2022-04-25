import "./App.css";
import List from "./components/List";

function App ({firstname}:any)
{
  return (
    <div> 
          <h1>
            welcome {firstname} for cognitive clouds training!!
          </h1>
       <List/>
    </div>
  );
}

export default App;

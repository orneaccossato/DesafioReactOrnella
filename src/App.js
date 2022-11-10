import NavBar from "./Components/NavBar"
import ItemListContainer from "./container/ItemListContainer";
import Router from "./Routes";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Ladobuenardo helado y pattiserie"}/>
      <Router/>
    </div>
  );
}

export default App;

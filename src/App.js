import NavBar from "./Components/NavBar"
import ItemListContainer from "./container/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Ladobuenardo helado y pattiserie"}/>
    </div>
  );
}

export default App;

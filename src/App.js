import './App.css';
import Navbar from './componets/Navbar/Navbar';
import CartWidget from './componets/CartWidget/CartWidget';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <CartWidget/>
      <header className="App-header">
      <Navbar/>
      <ItemListContainer greenting={"Bienvenido a My Imports OM"}/>
      </header>
    </div>
  );
}

export default App;

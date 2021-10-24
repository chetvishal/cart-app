import './App.css';
import { ProductList } from './Pages/index';
import { Navbar } from './Components/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;

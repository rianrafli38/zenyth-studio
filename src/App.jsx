import { Route, Switch } from "wouter";
import Navbar from './components/Navbar';
import PhotographerPage from './pages/PhotographerPage';
import Home from './pages/Home'; // Import halaman utama (yang ada ScrollTo)

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/photographer" component={PhotographerPage} />
      </Switch>
    </>
  );
}

export default App;
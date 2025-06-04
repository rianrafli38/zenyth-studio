import { Route, Switch } from "wouter";
import Navbar from './components/Navbar';
import ScrollTo from './pages/ScrollTo';
import PhotographerPage from './pages/PhotographerPage';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        {/* Halaman utama */}
        <Route path="/">
          <ScrollTo />
        </Route>

        {/* Halaman khusus fotografer & videografer */}
        <Route path="/photographer" component={PhotographerPage} />
      </Switch>
    </>
  );
}

export default App;
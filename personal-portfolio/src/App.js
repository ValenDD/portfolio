import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';

import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProjectSlider } from './components/ProjectSlider';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ProjectSlider />
    </div>
  );
}

export default App;

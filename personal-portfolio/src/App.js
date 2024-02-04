import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProjectSlider } from './components/ProjectSlider';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <ProjectSlider />
      <Footer />
    </div>
  );
}

export default App;

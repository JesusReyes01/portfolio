import './styles/main.scss';
import './styles/layout/App.scss'
// import "./App.scss";
import Header from './Components/Header';
import About from './Components/About';
// import Skills from './Components/Skills';
import SkillsManualSpin from './Components/SkillsManualSpin';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <SkillsManualSpin/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

import './App.css';
import Terminal from './components/Terminal';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <Terminal />
      <About />
      <Projects />
      <Experience/>
      <Socials/>
    </div>
  );
}

export default App;

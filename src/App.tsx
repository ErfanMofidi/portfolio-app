import { Header } from './Components/Header/Header'
import { Presentation } from './Components/MainContent/Presentation';
import { Introduction } from './Components/MainContent/Introduction';
import { Globe } from './Components/MainContent/Globe';
import { Footer } from './Components/Footer/Footer';
import { Projects } from './Components/MainContent/Projects';

import ScrollItem from './Functions/ScrollItems';

import './App.css';
import './CSS/Header/header.css'
import './CSS/Header/header(responsive).css'
import './CSS/MainContent/presentation/Presentation.css'
import './CSS/MainContent/presentation/Presentation(responsive).css'
import './CSS/MainContent/introduction/Introduction.css'
import './CSS/MainContent/introduction/Introduction(responsive).css'
import './CSS/MainContent/globe/globe.css'
import './CSS/MainContent/globe/globe(responsive).css'
import './CSS/Footer/Footer.css'
import './CSS/MainContent/Projects.css'


function App() {
  return (
    <div className="App">
      <Header />

      <div className='main-content'>
        <ScrollItem>
          <Presentation />
        </ScrollItem>
        <ScrollItem>
          <Introduction />
        </ScrollItem>
        <ScrollItem>
          <Projects />
        </ScrollItem>
        <ScrollItem>
          <Globe />
        </ScrollItem>
      </div>

      <div className='footer'>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;

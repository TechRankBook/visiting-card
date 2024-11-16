import './App.css';
import AboutUs from './components/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactInfo from './components/ContactInfo';
import RankBookConnect from './components/RankBookConnect';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Gallery from './components/Gallery';
function App() {
  return (
    <div className="">
      <AboutUs/>
      <hr style={{ height: '2px', backgroundColor: 'black', border: 'none' }} />
<ContactInfo/>
<hr style={{ height: '2px', backgroundColor: 'black', border: 'none' }} />
<RankBookConnect/>
<hr style={{ height: '2px', backgroundColor: 'black', border: 'none' }} />
<Gallery/>
    </div>
  );
}

export default App;

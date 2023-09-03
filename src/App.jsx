import './styles/components/app.sass';
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"
import { HeaderProfile } from './components/HeaderProfile';


function App() {

  return (
    <div id="Portfolio">
      <HeaderProfile/>
      <h1>Thiago Waldrich</h1>
      
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App

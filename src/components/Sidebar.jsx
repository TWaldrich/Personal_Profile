import Avatar from '../img/eu.png';
import "../styles/components/sidebar.sass";
import SocialNetworks from './SocialNetwork';
import InformationContainer from './InformationContainer';

const Sidebar= () =>{
    return(<aside id="sidebar">
        <img src={Avatar} alt="Thiago Waldrich" srcset/>
        <p className="title">Desenvolvedor</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="" className="btn">
            Download Currículo
        </a>
       </aside>
)}
export default Sidebar
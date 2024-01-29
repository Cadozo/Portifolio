import Avatar from '../img/eu.png'
import '../styles/components/Sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

function Sidebar() {
    return (
      <aside id="sidebar">
        <img src={Avatar} alt="Ricardo Barbosa" />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href="https://docs.google.com/document/d/e/2PACX-1vSJleWiWsWdKe1LsXzNO1qB3eoTo1GYS7p8IXDHKXVNVJ8PqyQUvwjnAy1EdpwxlpjXST4NPyW7xlcy/pub" className="btn" target='_blank' >Ver Currículo</a>
      </aside>
    );
  };

export default Sidebar
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/thiago-wald-ferreira-dev/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/ThiagoWaldrich" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/thiagowald/" },
  ];
  
  const SocialNetworks = () => {
    return (
      <section id="social-networks">
        {socialNetworks.map((network) => (
          <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank">
            {network.icon}
          </a>
        ))}
      </section>
    );
  };

export default SocialNetworks
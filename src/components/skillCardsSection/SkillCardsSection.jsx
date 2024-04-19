import React from 'react';
import iconFrontendPath from '../../assets/icons/frontend.svg';
import iconBackendPath from '../../assets/icons/backend.svg';
import iconMobilePath from '../../assets/icons/mobile.svg';
import iconDevopsPath from '../../assets/icons/devops.svg';

//* Styles
import './SkillCardsSection.scss';

const SkillCardsSection = () => {
  return (
    <section>
      <div className="container-skills-card">
        <h1 className="title-section">
          <span translate="no" className="first-word">
            #Skill
          </span>
          <span translate="no" className="second-word">
            Cards
          </span>
        </h1>
        <p className="description">
          Je suis un développeur polyvalent spécialisé dans la création
          d'interfaces percutantes et la sécurisation des données, ainsi que
          dans l'optimisation des processus de développement et de déploiement.
        </p>
        <div className="container-cards">
          <div className="item-card">
            <img src={iconFrontendPath} alt="" />
            <p translate="no">Frontend</p>
          </div>
          <div className="item-card">
            <img src={iconBackendPath} alt="" />
            <p translate="no">Backend</p>
          </div>
          <div className="item-card">
            <img src={iconMobilePath} alt="" />
            <p translate="no">Mobile</p>
          </div>
          <div className="item-card">
            <img src={iconDevopsPath} alt="" />
            <p translate="no">DevOps</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillCardsSection;
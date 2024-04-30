import React from 'react';
import { skillsData } from '../../data/skillsData';
import iconFrontendPath from '../../assets/icons/frontend.svg';
import ProgressBar from '@ramonak/react-progress-bar';

//* Styles
import './SkillsSection.scss';
import TitleSection from '../titleSection/TitleSection';

const SkillsSection = () => {
  skillsData.forEach((skill) => {
    skill.tools.sort((a, b) => a.name.localeCompare(b.name));
  });

  return (
    <section>
      <div className="container-skills">
        <TitleSection
          first="#All"
          second="Skills"
          description="Here are my web development skills, covering frontend, backend and
          database management. Explore each section to discover the tools and
          technologies that I master in these key areas."
          color="white"
        />
        <div className="container-cards">
          {skillsData.map((skill, index) => (
            <div key={index} className="item-card">
              <div className="title">
                <img src={skill.icon} alt="" />
                <h3 translate="no">{skill.title}</h3>
              </div>
              <h4>{skill.description}</h4>
              <ul>
                {skill.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <input
                type="radio"
                name="skills"
                id={skill.title.toLowerCase()}
              />
              <label
                translate="no"
                htmlFor={skill.title.toLowerCase()}
                className="item-card-label"
              >
                Tools & Technologies
              </label>
              <div className="item-card-content">
                {skill.tools.map((tool, index) => (
                  <a
                    translate="no"
                    target="_blank"
                    href={'https://www.google.com/search?q=' + tool.name}
                  >
                    <ProgressBar
                      className="progress-bar"
                      height="auto"
                      borderRadius="0"
                      bgColor={tool.background}
                      baseBgColor={tool.background + '90'}
                      labelColor={tool.color}
                      completed={tool.value}
                      customLabel={tool.name}
                      transitionDuration="3s"
                      labelAlignment="left"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

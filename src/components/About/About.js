import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://gurupawar.github.io/portfolio/assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Christopher Mrakovcic</strong> and I am a Software Engineer. 
            Prior to my transition into Technology I worked in the Beverage Industry 
            where I picked up skills that have helped me as a Software Engineer such as 
            attention to detail, and organization. I graduated from Flatiron School in August 2021 
            with the knowledge to be proficient in Ruby on Rails, JavaScript, as well as React. 
            I aim to find a position where I can put my skills to use, and continue 
            improving my skills and knowledge as a Software Engineer.
          </div>
          <div className="AboutBio tagline2">
            I have become proficient using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

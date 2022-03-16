import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Christopher Mrakovcic</h1>
            <h5>Full Stack Web Developer</h5>
          </HeroLeft>
          <HeroRight>
            <Image
              // src="https://media-exp1.licdn.com/dms/image/C4D03AQGChnfqmBjeQQ/profile-displayphoto-shrink_800_800/0/1600909623981?e=1643846400&v=beta&t=itxmk3jVO7uO0tpwl-Ks4YC06hy1yOjWl0prtLMHcPU"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGChnfqmBjeQQ/profile-displayphoto-shrink_800_800/0/1600909623981?e=2147483647&v=beta&t=QInlnDHz6rvez6PIw-rCGc_YB-r3s_hhr6lmagLkUow"
              alt="picture"
            />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
}

export default Hero;

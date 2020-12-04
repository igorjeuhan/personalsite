import FlexColumn from './components/FlexColumn';
import FlexRow from './components/FlexRow';
import Profile from './components/Profile';
import Button from './components/Button';
import Skill from './components/Skill';
import iconWtp from './assets/whatsapp.svg';
import iconGit from './assets/github.svg';

function App() {
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Profile></Profile>
          <FlexRow>
            <Button
              icon={iconWtp}
              link="https://api.whatsapp.com/send?phone=5538998559690"
              textLink="Whatsapp"
              classe="wtp"
            />
            <Button
              icon={iconGit}
              link="https://github.com/igorjeuhan/"
              textLink="Github"
              classe="git"
            />
          </FlexRow>
        </FlexColumn>
        <FlexColumn>
          <Skill
            nomeSkill="React JS"
            skl="react"
            cor="#246bfe"
            titulo="r"
          ></Skill>
          <Skill nomeSkill="HTML5" skl="html" cor="#06d755" titulo="h"></Skill>
          <Skill nomeSkill="CSS3" skl="css" cor="#c25fff" titulo="c"></Skill>
          <Skill nomeSkill="PHP" skl="php" cor="#ffffff" titulo="p"></Skill>
        </FlexColumn>
      </FlexRow>
    </>
  );
}

export default App;

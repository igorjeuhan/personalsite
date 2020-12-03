import FlexColumn from './components/FlexColumn';
import FlexRow from './components/FlexRow';
import Profile from './components/Profile';
import Button from './components/Button';
import iconWtp from './assets/whatsapp.svg';
import iconGit from './assets/github.svg';

function App() {
  return (
    <>
      <FlexColumn>
        <Profile></Profile>
      </FlexColumn>
      <FlexRow>
        <Button icon={iconWtp} link="" textLink="Whatsapp" classe="wtp" />
        <Button
          icon={iconGit}
          link="https://github.com/igorjeuhan/"
          textLink="Github"
          classe="git"
        />
      </FlexRow>
    </>
  );
}

export default App;

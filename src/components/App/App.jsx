import HeadAppBar from 'components/AppBar/HeadAppBar';
import MainContainer from 'components/Container/MainContainer';
import { HomeView } from 'views/HomeView';

function App() {
  return (
    <>
    <MainContainer>
      <HeadAppBar />
      </MainContainer>
      <HomeView/>
    </>
  )
}

export default App

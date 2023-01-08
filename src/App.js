import Home from './pages/Home';
import styled from 'styled-components'
import Header from './components/Header';
import "./fonts/OpenSans/OpenSans-Regular.ttf"
import "./fonts/Merriweather_Sans/MerriweatherSans-Regular.ttf"
import "./fonts/Merriweather/Merriweather-Regular.ttf"

const AppContainer = styled.div`
  height: 100vh;
  // background: linear-gradient(#FBE6C4 0%, #B7BAB7 25%, #D8D392 55%, #8B7100 55%, #DB9750 100%);
  display: flex;
  flex-direction: column;
  background: linear-gradient(192.27deg, rgba(205, 156, 104, 0.65) 5.47%, rgba(233, 215, 174, 0.65) 91.07%), linear-gradient(180deg, #8B7100 0%, #DB9750 100%);

`


function App() {
  return (
    <AppContainer>
      <Header/>
      <Home/>
    </AppContainer>
  );
}

export default App;

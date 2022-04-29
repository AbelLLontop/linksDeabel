import styled from 'styled-components';
import Slider from './components/common/Slider/Slider';
import PrincipalPage from './components/views/Pincipal';

const AppContent = styled.div`
  background-color: #14222c;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: auto 1fr;
`;

function App() {
  return (
    <AppContent>
      <Slider />
      <PrincipalPage/>
    </AppContent>
  );
}

export default App;

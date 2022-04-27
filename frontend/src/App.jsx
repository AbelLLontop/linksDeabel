import styled from 'styled-components';
import PrincipalPage from './components/views/Pincipal';

const AppContent = styled.div`
  background-color: #14222c;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContent>
      <PrincipalPage/>
    </AppContent>
  );
}

export default App;


import styled from 'styled-components';
import Link from './components/common/Link/Link';

const AppContent = styled.div`
  background-color: #14222C;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <AppContent>
      <Link/>
    </AppContent>
     
  );
}

export default App;

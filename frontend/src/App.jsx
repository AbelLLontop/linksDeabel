import Form from './components/common/Form/Form';
import styled from 'styled-components';

const AppContent = styled.div`
  background-color: #14222C;
  width: 100vw;
  height: 100vh;
`

function App() {
  return (
    <AppContent>
    <Form/>
    </AppContent>
     
  );
}

export default App;

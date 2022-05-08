import styled from 'styled-components';
import Slider from '@/components/common/Slider/Slider';
import PrincipalPage from '@/components/views/Pincipal';
import FilterProvider from '@/contexts/Filters/FilterProvider';



const AppContent = styled.div`
 background-color: #090e12;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: auto 1fr;
`; 

function App() {
  return (
    <AppContent>
      <FilterProvider>
        <Slider />
        <PrincipalPage />
      </FilterProvider>
    </AppContent>
  );
}

export default App;

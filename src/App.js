import './App.scss';
import AppRouter from './components/AppRouter';
import { ItemProvider } from './context/ItemContext';

function App() {
  return (
    <ItemProvider>
      <AppRouter />
    </ItemProvider>
  );
}

export default App;

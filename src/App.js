import Search from './components/Search';
import SearchResult from './components/SearchResult';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="   p-5 min-h-screen bg-blue-300 text-slate-800">
        <Search />

        <SearchResult />
      </div>
    </WeatherProvider>
  );
}

export default App;

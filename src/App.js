
import './App.css';
import WeatherApp from './WeatherApp';
import AnimatedEmoji from './AnimatedEmojis';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <div className="app-container">
          <h1 className="weather-title">Weather Search <AnimatedEmoji icon="CLEAR_DAY" colour="white" size={70} /></h1>
          <WeatherApp />
        </div>
      </header>
    </div>
  );
}

export default App;

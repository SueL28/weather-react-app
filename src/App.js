
import './App.css';
import WeatherApp from './WeatherApp';
import AnimatedEmoji from './AnimatedEmojis';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <div className="app-container">
          <h1 className="weather-title">Weather Search <AnimatedEmoji icon="CLEAR_DAY" colour="#f1b648" size={70} /></h1>
          <span>
            <WeatherApp />
          </span>
          <div>
            <p className="footer-links">
              <a href="https://github.com/SueL28/weather-react-app" target="_blank" rel="noreferrer">Open-source code</a> by <a href="https://www.linkedin.com/in/su-anne-lieu/" target="_blank" rel="noreferrer">Su-Anne Lieu</a>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

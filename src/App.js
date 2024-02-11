import './App.css';
import Datebuilder from './components/Datebuilder';
import WeatherInfo from './components/WeatherInfo';

import img from './Assets/background.jpg';

function App() {
  return (
    <div className="App">
      <div  style={{
          position: "absolute",
          top:"0",
          left:"0",
          width:"100%",
        height:"100%",
        zIndex: "-1",
        overflow: "hidden"}}>
        <img src={img} alt="" />
      </div>
      <div className="content">
        <Datebuilder />
        <WeatherInfo />
      </div>
    </div>
  );
}

export default App;


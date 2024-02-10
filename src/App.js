import './App.css';
import Datebuilder from './components/Datebuilder';
import WeatherInfo from './components/WeatherInfo';
import ImageSlide from './components/ImageSlide';


function App() {
  return (
    <div className="App">
        <div className="ImageSlide" style={{
          position: "absolute",
          top:"0",
          left:"0",
          width:"100%",
        height:"100%",
        zIndex: "-1",
        overflow: "hidden"
}}>
        <ImageSlide />
      </div>
      <div className="content">
        <Datebuilder />
        <WeatherInfo />
      </div>
    </div>
  );
}

export default App;


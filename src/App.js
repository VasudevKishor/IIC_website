import './App.css';
import Footer from './Footer';
import Header from './Header';
import ImageSlider from './Imageslider';
import Card_IIC from './Card_IIC';
import AboutCampus from './aboutCampus';



function App() {
  return (
    <div className="App">
      <Header />
      <div>
            <ImageSlider />
        </div>
        <div>
      <Card_IIC />
        </div>

        <div>
          <AboutCampus />
        </div>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Footer from './Footer';
import Header from './Header';
import ImageSlider from './Imageslider';
import Card_IIC from './Card_IIC';


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
      <Footer />
    </div>
  );
}

export default App;

import "./styles/App.css";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Cards from "./components/Cards";
import Convenors from "./components/Convenors";
import slider_1 from "./images/carousel-1.jpeg";
import slider_2 from "./images/carousel-2.jpeg";
import slider_3 from "./images/carousel-3.jpeg";
import slider_4 from "./images/carousel-4.jpeg";

function App() {
    const images = [slider_1, slider_2, slider_3, slider_4];

    return (
        <div className="App">
            <ImageSlider>
                {images.map((image, index) => {
                    return <img key={index} src={image} alt={image.imgAlt} />;
                })}
            </ImageSlider>
            <Cards />
            <Convenors />
            <Footer />
        </div>
    );
}

export default App;

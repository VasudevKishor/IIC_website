import "./styles/App.css";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Cards from "./components/Cards";
import Convenors from "./components/Convenors";


import slider_1 from "./images/amrita1.jpg";
import slider_2 from "./images/amrita2.avif";
import slider_3 from "./images/amrita3.jpg";
import slider_4 from "./images/amrita4.jpg";

function App() {
    const images = [slider_1, slider_2, slider_3, slider_4];

    return (
        <div className="App">
            <Header />
            <ImageSlider>
                {images.map((image, index) => {
                    return <img key={index} src={image} alt={image.imgAlt} />;
                })}
            </ImageSlider>
            <Cards />
            <AboutCampus />
            <Footer />

        </div>
    );
}

export default App;

import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Cards from "./components/Cards";
import Convenors from "./components/Convenors";

import slider_1 from "./images/Campus1.jpg";
import slider_2 from "./images/Campus2.jpg";
import slider_3 from "./images/Campus3.jpg";
import slider_4 from "./images/Campus4.jpg";

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
            <Convenors />
            <Footer />
        </div>
    );
}

export default App;

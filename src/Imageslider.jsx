import React, { useState } from "react";
import "./ImageSlider.css";
import Campus1 from "./CampusImages/Campus.jpg";

function ImageSlider() {
    const images = [
        Campus1,
        "",
        ""
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="image-slider">
            <button className="slider-button left" onClick={handlePrev}>
                &#10094;
            </button>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slider-image"
            />
            
            <button className="slider-button right" onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
}

export default ImageSlider;

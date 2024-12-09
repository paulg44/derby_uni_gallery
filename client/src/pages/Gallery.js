import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../assets/css/gallery.css";
import data from "../assets/data/journey.json";

function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(0);

  const handlePreviousPhoto = () => {
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    }
  };

  const handleNextPhoto = () => {
    if (photoIndex < data.length - 1) {
      setPhotoIndex(photoIndex + 1);
    }
  };

  return (
    <div className="gallery">
      <div className="galleryCardContainer">
        {data.map((step, index) => (
          <div
            className={`imageCard ${index === photoIndex ? "active" : ""}`}
            key={step.id}
          >
            <img src={step.image} alt={step.alt} />
            <h3>{step.caption}</h3>
            <div className="metadata">
              <h4>{step.caption}</h4>
              <p>{step.description}</p>
              <a href={step.link} target="_blank" rel="noreferrer">
                <button type="button" className="linkBtn">
                  {step.linkName}
                </button>
              </a>
            </div>
          </div>
        ))}
        <div className="scrollBtns">
          <button onClick={handlePreviousPhoto}>
            <FaArrowLeft />
          </button>
          <button onClick={handleNextPhoto}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

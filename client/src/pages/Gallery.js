import "../assets/css/gallery.css";
import data from "../assets/data/journey.json";

function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryCardContainer">
        {data.map((step) => (
          <div className="imageCard" key={step.id}>
            <img src={step.image} alt={step.alt} />
            <h3>{step.caption}</h3>
            <div className="metadata">
              <h4>{step.caption}</h4>
              <p>{step.description}</p>
              <button type="button" className="linkBtn">
                {step.link}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

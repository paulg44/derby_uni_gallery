import data from "../assets/data/journey.json";

function Gallery() {
  return (
    <div className="galleryContainer">
      {data.map((step) => (
        <div className="imageCard" key={step.id}>
          <img src={step.image} alt={step.alt} />
          <h3>{step.caption}</h3>
        </div>
      ))}
    </div>
  );
}

export default Gallery;

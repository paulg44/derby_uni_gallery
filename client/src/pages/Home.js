import { Link } from "react-router-dom";
import "../assets/css/home.css";
import homeBackground from "../assets/images/turtle_bg.jpg";

function Home() {
  return (
    <div
      className="homepage"
      style={{
        background: `url(${homeBackground}) no-repeat center center/cover`,
      }}
    >
      <div className="homepageHeader">
        <h1>
          The future is <span>you</span>
        </h1>
        <p className="homepageInfo">
          We have one simple promise - to make a positive impact. Through our
          ground-breaking research, teaching excellence and commitment to
          sustainable living, we are changing lives for the better.
          <br />
          <br />
          We could change yours too.
        </p>
        <div className="galleryCampaign">
          <p>Take a look at your prospective journey through our university.</p>
          <button type="button">
            <Link to={"/gallery"}>View the Gallery</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

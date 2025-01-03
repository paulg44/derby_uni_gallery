import { Link } from "react-router-dom";
import "../assets/css/home.css";
import { FaSearch } from "react-icons/fa";

function Home() {
  return (
    <div className="homepage">
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
        <div className="searchBarContainer">
          <input
            className="searchBar"
            name="searchBar"
            placeholder="Find your dream course..."
          ></input>
          <button
            type="button"
            className="searchBarBtn"
            aria-label="search bar button"
          >
            <FaSearch />
          </button>
        </div>
        <div className="galleryCampaign">
          <p>Take a look at your prospective journey through our university.</p>
          <button type="button">
            <Link to={"/gallery"}>View the Gallery</Link>
          </button>
        </div>
      </div>
      <Link className="apiLink" to={"/api"}>
        API Extra
      </Link>
    </div>
  );
}

export default Home;

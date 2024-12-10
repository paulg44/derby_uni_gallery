import { useEffect, useState } from "react";
import "../assets/css/api.css";

function APITest() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [established, setEstablished] = useState("");

  useEffect(() => {
    const handleApiRequest = async () => {
      try {
        const response = await fetch(
          `https://unidbapi.com/api/university/read?u=The Open University&key=378dbc801d`
        ).then((data) => {
          return data.json();
        });
        setCity(response.city);
        setCountry(response.country);
        setDescription(response.description);
        setEstablished(response.established);
        console.log(response);
      } catch (error) {
        console.error("error fetching data from API:", error);
      }
    };
    handleApiRequest();
  }, []);

  return (
    <div className="apiPage">
      <div className="apiHeader">
        <h2>
          Fetching <span>API</span> data
        </h2>
        <p>
          This part of the application is an extra. I started implementing this
          until I realised that University of Derby was not in the list of
          Universities on the unidbapi site. It's unfortunate as the plan was to
          sprinkle some data from this API in the image metadata etc. You can
          pick a University from the dropdown below to view the information.
        </p>
      </div>

      <div className="apiInfo">
        <p>
          Located in the city of <span>{city}</span>, {country}
        </p>
        <p>
          Established - <span>{established}</span>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default APITest;

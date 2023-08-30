import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-01-01&endtime=2023-01-02');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="earth" id="earth">
    <div>
      <h1>Earthquake and Tsunami Data</h1>
      <ul>
        {data.features && data.features.map(feature => (
          <li key={feature.id}>
            <strong>{feature.properties.title}</strong><br />
            Magnitude: {feature.properties.mag}<br />
            Time: {new Date(feature.properties.time).toLocaleString()}<br />
            Coordinates: {feature.geometry.coordinates.join(', ')}
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
}

export default MyComponent;

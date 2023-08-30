import React, { useState, useEffect } from 'react';

const CycloneData = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      const response = await fetch('https://api.weather.gov/alerts/active?area=KS');
      const data = await response.json();
      setAlerts(data.features);
    };

    fetchAlerts();
  }, []);

  return (
    <section className="cyclone" id="cyclone">
    <div>
        <h1>Cyclone Data</h1>
      {alerts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {alerts.map((alert) => (
            <li key={alert.properties.id}>
              <h3>{alert.properties.event}</h3>
              <p>{alert.properties.description}</p>
              <p>{alert.properties.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </section>
  );
};

export default CycloneData;

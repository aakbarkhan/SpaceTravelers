import React, { useState } from 'react';

const Rock = (props) => {
  const [reserve, setReserve] = useState(false);
  const handleReserve = () => {
    setReserve(() => !reserve);
  };
  const rocket = props;
  return (
    <div className="wrapper">
      <div className="image">
        <img src={rocket.rock.flickr_images[0]} alt={rocket.rocket_name} className="rocketImage" />
      </div>
      <div className="details">
        <h1>{rocket.rock.rocket_name}</h1>
        <p>
          {reserve && <small>Reserved</small>}
          {rocket.rock.description}
        </p>
        <button onClick={handleReserve} type="button">{reserve ? 'cancel Reservation' : 'Reserve Rocket'}</button>
      </div>

    </div>
  );
};
export default Rock;

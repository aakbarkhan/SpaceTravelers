import React from 'react';

const Rock = (props) => {
  const rocket = props;
  return (
    <div>
      <h1>{rocket.rock.rocket_name}</h1>
      <p>{rocket.rock.description}</p>
      <img src={rocket.rock.flickr_images[0]} alt={rocket.rocket_name} />
    </div>
  );
};
export default Rock;

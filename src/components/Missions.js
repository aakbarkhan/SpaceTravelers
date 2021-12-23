import React from 'react';
// import { useDispatch } from 'react-redux';

const Missions = (props) => {
  const prop = props;
  return (
    <tr>
      <td className="first-col">{prop.mission.mission_name}</td>
      <td className="second-col">{prop.mission.description}</td>
      <td className="third-col">
        <button type="button">Available</button>
      </td>
      <td className="fourth-col">
        <button type="button">Join</button>
      </td>
    </tr>
  );
};

export default Missions;

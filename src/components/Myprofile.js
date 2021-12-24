import { useSelector } from 'react-redux';

const Myprofile = () => {
  const rockets = useSelector((state) => state.rocketReducer);
  const reservedItems = rockets.rockets.filter((item) => item.reserve === true);
  const missionItems = rockets.missions.filter((item) => item.join === true);

  return (
    <div className="wrapper_profile">
      <div className="profile1">
        <h3>My Rockets</h3>
        <ul className="list">
          {reservedItems.map((rock) => <li key={rock.rocket_name}>{rock.rocket_name}</li>)}
        </ul>
      </div>
      <div className="profile2">
        <h3>My Missions</h3>
        <ul className="list">
          {
            missionItems.map((mission) => (
              <li key={mission.mission_name}>{mission.mission_name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Myprofile;

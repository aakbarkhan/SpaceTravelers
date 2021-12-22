import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionsComponent from './Missions';
import { getMissionFromApi } from '../redux/actions/rocket';

const MissionList = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.rocketReducer);
  console.log(missions.missions, 'this me searching');
  useEffect(() => {
    dispatch(getMissionFromApi());
  }, []);
  return (
    <div className="title">
      {missions.missions.map((mission) => (
        <MissionsComponent key={mission.id} mission={mission} />
      ))}
    </div>
  );
};

export default MissionList;

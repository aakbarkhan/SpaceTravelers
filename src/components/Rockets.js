import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Form from './addBooks';
// import Rock from './Rock';
import { getRocketFromApi } from '../redux/actions/rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketReducer);
  console.log(rockets, 'rockets');
  useEffect(() => {
    dispatch(getRocketFromApi());
  }, []);
  return (
    <div className="title">
      {rockets.map((ro) => (
        console.log(ro)
      ))}
    </div>
  );
};

export default Rockets;

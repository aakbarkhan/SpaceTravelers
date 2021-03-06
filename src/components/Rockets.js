import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rock from './Rock';
import { getRocketFromApi } from '../redux/actions/rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketReducer);
  useEffect(() => {
    if (!rockets.rockets[0]) {
      dispatch(getRocketFromApi());
    }
  }, []);
  return (
    <div className="title">
      {rockets.rockets.map((rock) => (
        <Rock key={rock.id} rock={rock} />
      ))}
    </div>
  );
};

export default Rockets;

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Form from './addBooks';
import Rock from './Rock';
import { getRocketFromApi } from '../redux/actions/rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketReducer);
  useEffect(() => {
    dispatch(getRocketFromApi());
  }, []);
  return (
    <div className="title">
      {rockets.map((rock) => (
        <Rock key={rock.id} rock={rock} />
      ))}
    </div>
  );
};

export default Rockets;

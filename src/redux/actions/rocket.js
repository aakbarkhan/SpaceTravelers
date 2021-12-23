const FETCH_ROCKETS = 'FETCH_ROCKETS';
const FETCH_MISSIONS = 'FETCH_MISSIONS';
const CREATE_RESERVE = 'CREATE_RESERVE';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const missionUrl = 'https://api.spacexdata.com/v3/missions';
const initialState = {
  rockets: [],
  missions: [],
};

export const getRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const getMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const createReserve = (payload) => ({
  type: CREATE_RESERVE,
  payload,
});

export const getRocketFromApi = () => async (dispatch) => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  const update = (response) => response.map((el) => ({ ...el, reserve: false }));
  const seeWhat = update(response);
  console.log(seeWhat, 'helllllopooooooooooooo');
  dispatch(getRockets(response));
};

export const getMissionFromApi = () => async (dispatch) => {
  const request = await fetch(missionUrl);
  const response = await request.json();
  const updateMission = (response) => response.map((el) => ({ ...el, join: false }));
  const seeMission = updateMission(response);
  console.log(seeMission, 'heeeee');
  dispatch(getMissions(response));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    case FETCH_MISSIONS:
      return { ...state, missions: action.payload };
    case CREATE_RESERVE: {
      const changeState = state.rockets.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, reserve: action.payload.reserve };
        }
        return el;
      });
      return { ...state, rockets: changeState };
    }
    default:
      return state;
  }
};

export default reducer;

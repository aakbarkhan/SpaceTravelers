const FETCH_ROCKETS = 'rocketStore/rockets/FETCH_ROCKETS';
// const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
// const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

export const getRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const getRocketFromApi = () => async (dispatch) => {
  const request = await fetch(baseUrl);
  const response = await request.json();
  dispatch(getRockets(response));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...state, action.payload];
    // case REMOVE_BOOK:
    //   return state.filter((book) => book.item_id !== action.payload);
    // case FETCH_BOOK:
    //   return Object.entries(action.payload).map(([key, value]) => {
    //     const [book] = value;
    //     return {
    //       item_id: key,
    //       ...book,
    //     };
    //   });
    default:
      return state;
  }
};

export default reducer;

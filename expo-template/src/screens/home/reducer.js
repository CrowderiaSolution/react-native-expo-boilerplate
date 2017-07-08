import {
  FETCH_DATA_LIST,
} from './actions';

const INITIAL_STATE = {
  dataPack: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_DATA_LIST}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_DATA_LIST}_FULFILLED`:
      return {
        dataPack: {
          data: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: null,
          },
        },
      };
    case `${FETCH_DATA_LIST}_REJECTED`:
      return {
        dataPack: {
          data: [],
          isFetched: true,
          error: {
            on: true,
            message: 'Error when fetching my meetups',
          },
        },
      };
    default:
      return state;
  }
};

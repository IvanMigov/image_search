import * as ActionTypes from "./constants";

const initialState = {
  queryString: '',
  images:      null,
  error:       null
};

export default function(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case ActionTypes.SET_IMAGE_REQUEST_STR:
      return {
        ...state,
        queryString: data
      };

    case ActionTypes.SEARCH_IMAGE_SUCCESS:
      return {
        ...state,
        images: data
      };

    case ActionTypes.SEARCH_IMAGE_FAILURE:
      return {
        ...state,
        error: data
      };

    default:
      return state;
  }
}

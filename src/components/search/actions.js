import * as ActionTypes from './constants'

export const changeSearchQuery = query => ({
  type: ActionTypes.SET_IMAGE_REQUEST_STR,
  data: query
});

export const searchImages = () => ({
  type: ActionTypes.SEARCH_IMAGE_REQUEST
});
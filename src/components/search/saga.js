
import { call, put, select, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";
import API from "../../api";
import * as ActionTypes from "./constants";

const jpegType = 'image/jpeg';

function* searchImages() {
  yield call(delay, 200);
  try {
    const { queryString } = yield select(state => state.search);
    if (queryString) {
      const { data: { data } } = yield API.getImages(queryString);

      const imgLinks = data.map(({ images, id }) => ({ images, id }))
        .filter(({ images }) => images)
        .map(({ images, id }) => ({ link: images[0].link, type: images[0].type, id}))
        .filter(({ type }) => type === jpegType )
        .map(({ link, id }) => ({ link, id }))
        .slice(0, 8);

      yield put({ type: ActionTypes.SEARCH_IMAGE_SUCCESS, data: imgLinks });
    } else {
      yield put({ type: ActionTypes.SEARCH_IMAGE_SUCCESS, data: null });
    }
  } catch (err) {
    yield put({ type: ActionTypes.SEARCH_IMAGE_FAILURE, data: err.message });
  }
}

export default [
  takeLatest(ActionTypes.SEARCH_IMAGE_REQUEST, searchImages)
];

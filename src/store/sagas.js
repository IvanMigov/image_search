import { all } from "redux-saga/effects";
import search from '../components/search/saga';

export default function* rootSaga() {
  yield all([
    ...search
  ]);
}

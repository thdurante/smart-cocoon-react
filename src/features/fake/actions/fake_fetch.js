import { fetchDataSuccess, fetchDataFailure } from "../fakeSlice";
import FakeApi from '../../../services/fake_api';

export const fetchData = () => async dispatch => {
  try {
    const result = await FakeApi.fetchData();
    dispatch(fetchDataSuccess(result.data));
  } catch (err) {
    dispatch(fetchDataFailure(`failure: ${err.message}`));
  }
}

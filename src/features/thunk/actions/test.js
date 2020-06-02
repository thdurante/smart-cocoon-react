import { testThunkSuccess, testThunkFailure } from "../thunkSlice";

export const testThunkAction = (someArg, otherArg) => async dispatch => {
  try {
    debugger;
    const result = await new Promise(resolve => resolve('abc'));
    debugger;
    dispatch(testThunkSuccess(`success: ${someArg} | ${otherArg} | ${result}`));
  } catch (err) {
    dispatch(testThunkFailure(`failure: ${err.message}`));
  }
}

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // section 5-60: Avoiding state mutations in reducer
      // same as `return state.concat([action.payload.data]);`
      return [ action.payload.data, ...state ];

  }

  return state;
}
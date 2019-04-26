import { LOAD_DATA, LOAD_OBJECT_VIEW } from "../actions";

export interface ApplicationReducerState {
  DATA: any[];
  OBJECT_VIEW: any;
}

const initialState: ApplicationReducerState = {
  DATA: [],
  OBJECT_VIEW: {}
};

export const applicationReducer = (
  state = initialState,
  action: any
): ApplicationReducerState => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        DATA: action.playload
      };
    case LOAD_OBJECT_VIEW:
      return {
        ...state,
        OBJECT_VIEW: action.playload
      };
    default:
      return state;
  }
};

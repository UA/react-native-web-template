import { Types } from "../../utils/constants";

const INITIAL_STATE = {
  items: [],
  error: "",
};

export default function users(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
      };
    }
    case Types.USERS_ERROR: {
      return {
        ...state,
        items: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}

import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import covid from "./covid"; //리듀서를 불러옴

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  covid,
});

//서버사이드렌더링,HYDRATE을 위해서 인덱스 리듀서 추가

export default rootReducer;

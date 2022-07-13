import { USER_DATA } from "./action";

const initalData = {
  user: {},
};

export const reducer = (store = initalData, { type, payload }) => {
  if (type === USER_DATA) {
    return { ...store, user: payload };
  } else {
    return store;
  }
};

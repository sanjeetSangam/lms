export const USER_DATA = "USER_DATA";

export const addUser = (payload) => {
  return { type: USER_DATA, payload };
};

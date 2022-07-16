export const compareDate = (dt) => {
  let today = new Date().toISOString().slice(0, 10);
  let providedDate = new Date(dt);

  return +today === +providedDate;
};

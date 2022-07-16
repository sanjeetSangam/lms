export const compareDate = (dt) => {
  let today = new Date().toISOString().slice(0, 10);
  let curr = new Date(today);
  let providedDate = new Date(dt);

  if (curr > providedDate) {
    return true;
  }

  if (curr < providedDate) {
    return "UPCOMING";
  }

  if (+curr === +providedDate) {
    return "LIVE";
  }
};

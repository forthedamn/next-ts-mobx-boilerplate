export const format = (time: Date | undefined) => {
  if (!time) {
    return '';
  }
  return time.toLocaleString(undefined, {hour12: false});
};

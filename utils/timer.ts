export const format = (time: Date | undefined) => {
  if (!time) {
    return '';
  }
  return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
};

export const timeRange = (open: number, close: number) => {
  if (open === close) {
    return `24 Hours`;
  }
  return `${open}:00 - ${close}:00`;
};

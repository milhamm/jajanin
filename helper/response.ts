export const genericResponse = <T>(success: boolean, code: number, data: T) => {
  return {
    success: success,
    code: code,
    data: data,
  };
};

export const genericException = <T>(
  success: boolean,
  code: number,
  errors: T
) => {
  return {
    success: success,
    code: code,
    errors: errors,
  };
};

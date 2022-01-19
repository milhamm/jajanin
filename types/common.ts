export type GenericResponse<T> = {
  success: boolean;
  code: number;
  data: T;
};

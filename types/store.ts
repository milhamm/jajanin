import { StoreResponse } from "../pages/api/store/[id]";
import { GenericResponse } from "./common";

export type StoreDetailResponse = GenericResponse<StoreResponse>;

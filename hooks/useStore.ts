import useSWR from "swr";
import { fetcher } from "../client/api";
import { StoreDetailResponse } from "../types/store";

const useStore = (slug: string) => {
  const { data, error } = useSWR<StoreDetailResponse>(
    `/store/${slug}`,
    fetcher
  );

  return {
    store: data,
    error: error,
  };
};

export default useStore;

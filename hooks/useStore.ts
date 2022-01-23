import useSWR from "swr";
import { fetcher } from "../client/api";
import { PlacesResponse } from "../pages/api/stores";
import { StoreDetailResponse } from "../types/store";

type StoreType = {
  slug?: string;
  search?: string;
};

const useStore = ({ slug, search }: StoreType = {}) => {
  const { data: stores, mutate: updateAllStore } = useSWR<PlacesResponse>(
    !slug && !search ? "/stores" : null,
    fetcher
  );

  const {
    data,
    error,
    mutate: updateSingleStore,
  } = useSWR<StoreDetailResponse>(slug ? `/store/${slug}` : null, fetcher);

  const { data: searched } = useSWR<PlacesResponse>(
    !slug && search !== "" ? `/stores?search=${search}` : null,
    fetcher
  );

  return {
    searched: searched,
    stores: stores,
    store: data,
    error: error,
    updateAllStore,
    updateSingleStore,
  };
};

export default useStore;

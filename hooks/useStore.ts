import useSWR from "swr";
import { fetcher } from "../client/api";
import { PlacesResponse } from "../pages/api/stores";
import { StoreDetailResponse } from "../types/store";

type StoreType = {
  slug?: string;
  search?: string;
};

const useStore = ({ slug, search }: StoreType = {}) => {
  const { data: stores } = useSWR<PlacesResponse>(
    !slug ? "/stores" : null,
    fetcher
  );

  const { data, error } = useSWR<StoreDetailResponse>(
    slug ? `/store/${slug}` : null,
    fetcher
  );

  const { data: searched } = useSWR<PlacesResponse>(
    !slug && search !== "" ? `/stores?search=${search}` : null,
    fetcher
  );

  return {
    searched: searched,
    stores: stores,
    store: data,
    error: error,
  };
};

export default useStore;

import { useSWRConfig } from "swr";
import api from "../client/api";

const useReview = (review_id: string, slug: string) => {
  const { mutate } = useSWRConfig();

  const voteReview = async () => {
    try {
      await api.post(`/review/${review_id}/vote`);
      mutate(slug ? `/store/${slug}` : null);
    } catch (error) {}
  };

  const deleteReview = async (id: string) => {
    try {
      await api.delete(`/review/${review_id}/vote/${id}`);
      mutate(slug ? `/store/${slug}` : null);
    } catch (error) {}
  };

  return {
    voteReview,
    deleteReview,
  };
};

export default useReview;

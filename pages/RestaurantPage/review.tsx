import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import { detailStoreMock } from "../../mocks/data";

const review = () => {
  return (
    <>
      <RestaurantPageHeader store={detailStoreMock.data} />
    </>
  );
};

export default review;

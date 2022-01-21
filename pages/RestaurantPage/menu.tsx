import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import { detailStoreMock } from "../../mocks/data";

const menu = () => {
  return (
    <>
      <RestaurantPageHeader store={detailStoreMock.data} />
      <main className='container mt-5 flex gap-4'></main>
    </>
  );
};

export default menu;

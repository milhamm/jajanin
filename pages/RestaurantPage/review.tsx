import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import { detailStoreMock } from "../../mocks/data";
import StarsReview from "../../components/StarsReview";

const review = () => {
  return (
    <>
      <RestaurantPageHeader store={detailStoreMock.data} />
      <main className='container mt-5 flex gap-4 mobile:flex-col mobile:flex-col-reverse mobile:mb-10 laptop:flex-row'>
        <section className='flex flex-col gap-4'>
          {/* Restaurant Reviews */}
          <div>
            <h3 className='font-semibold text-lg'>RestaurantName Reviews</h3>
          </div>
        </section>
        <aside className='flex flex-col h-fit gap-5 items-start p-5 rounded-lg shadow shadow-gray-300'>
          <p className='font-medium text-left'>Rate your dining experience</p>
          <StarsReview />
          <a href='' className='text-red-500'>
            Write a Review
          </a>
        </aside>
      </main>
    </>
  );
};

export default review;

import { StoreDetailType } from "../../types/store";
import SideRating from "../SideRating";
import UserReview from "../UserReview";

type ReviewSectionProps = {
  store: StoreDetailType;
};

const ReviewSection = ({ store }: ReviewSectionProps) => {
  return (
    <main className='mt-5 flex gap-12 mobile:flex-col mobile:flex-col-reverse mobile:mb-10 laptop:flex-row'>
      <section className='flex flex-col gap-4 grow w-full'>
        <div>
          <h3 className='font-semibold text-lg'>{store?.store_name} Reviews</h3>
        </div>
        {store?.reviews.map((review) => (
          <UserReview review={review} key={review.id} />
        ))}
      </section>
      <SideRating store={store} />
    </main>
  );
};

export default ReviewSection;

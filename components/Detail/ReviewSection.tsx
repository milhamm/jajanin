import { FaStar } from "react-icons/fa";
import { StoreDetailType } from "../../types/store";
import UserReview from "../UserReview";

type ReviewSectionProps = {
  store: StoreDetailType;
};

const ReviewSection = ({ store }: ReviewSectionProps) => {
  return (
    <main className='container mt-5 flex gap-12 mobile:flex-col mobile:flex-col-reverse mobile:mb-10 laptop:flex-row'>
      <section className='flex flex-col gap-4 grow w-full'>
        <div>
          <h3 className='font-semibold text-lg'>{store?.store_name} Reviews</h3>
        </div>
        {store?.reviews.map((review) => (
          <UserReview review={review} key={review.id} />
        ))}
      </section>
      <aside className='flex flex-col h-fit gap-5 items-start p-5 rounded-lg shadow shadow-gray-300'>
        <p className='font-medium text-left'>Rate your dining experience</p>
        <div className='flex gap-2'>
          <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
            <p>1</p>
            <FaStar className='text-[0.65rem]' />
          </button>
          <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
            <p>2</p>
            <FaStar className='text-[0.65rem]' />
          </button>
          <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
            <p>3</p>
            <FaStar className='text-[0.65rem]' />
          </button>
          <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
            <p>4</p>
            <FaStar className='text-[0.65rem]' />
          </button>
          <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
            <p>5</p>
            <FaStar className='text-[0.65rem]' />
          </button>
        </div>
        <a href='' className='text-red-500'>
          Write a Review
        </a>
      </aside>
    </main>
  );
};

export default ReviewSection;

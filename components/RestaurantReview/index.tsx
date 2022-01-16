import { FaRegThumbsUp, FaStar } from "react-icons/fa";

type RestaurantReviewProps = {
  restaurantName: string;
  customerName: string;
};

const RestaurantReview = ({
  restaurantName,
  customerName,
}: RestaurantReviewProps) => {
  return (
    <div className='w-full h-[150px] flex flex-col px-4 py-2'>
      <h1 className='font-semibold'>{restaurantName}</h1>
      <div className='flex w-full items-center gap-2'>
        <h3 className='text-sm'>{customerName}</h3>
        <div className='flex items-center gap-1'>
          <span>3</span>
          <FaStar className='text-xs' />
        </div>
      </div>
      <div className='w-full h-[75px] text-xs'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dicta aliquam corrupti, eaque nulla debitis.
      </div>
      <div className='flex justify-end items-center py-2 gap-2'>
        <button>
          <FaRegThumbsUp className='text-sm fill-current hover:text-black' />
        </button>
        <p className='text-sm'>Helpful</p>
      </div>
    </div>
  );
};

export default RestaurantReview;

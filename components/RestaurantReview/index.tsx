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
    <div className='w-full h-[150px] flex flex-col px-4 py-2 text-[#75757C]'>
      <h1 className='font-black'>{restaurantName}</h1>
      <div className='flex w-full items-center gap-2'>
        <h3 className='text-sm'>{customerName}</h3>
        <div className='flex items-center gap-1'>
          <span>3</span>
          <FaStar className='text-xs text-yellow-200' />
        </div>
      </div>
      <div className='w-full h-[75px] text-xs'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dicta aliquam corrupti, eaque nulla debitis.
      </div>
      <div className='flex justify-end items-center py-2'>
        <button className='flex items-center gap-2 text-teal-400'>
          <FaRegThumbsUp className='text-sm fill-current' />
          <p className='text-sm'>Helpful</p>
        </button>
      </div>
    </div>
  );
};

export default RestaurantReview;

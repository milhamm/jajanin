/* eslint-disable no-unused-vars */
import { FaStar } from "react-icons/fa";

type StarsReviewProps = {
  selectedRating: number;
  handleOnChange: (selectedR: number) => void;
};

const StarsReview = ({ selectedRating, handleOnChange }: StarsReviewProps) => {
  return (
    <>
      <div className='flex gap-2'>
        {Array.from(Array(5).keys()).map((rating) => (
          <button
            key={rating}
            onClick={() => handleOnChange(rating + 1)}
            className={`${
              selectedRating === rating + 1
                ? "bg-teal-400 text-white"
                : "text-gray-400 "
            } flex items-center gap-1 border  w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent`}
          >
            <p>{rating + 1}</p>
            <FaStar className='text-[0.65rem] text-amber-300' />
          </button>
        ))}
      </div>
    </>
  );
};

export default StarsReview;

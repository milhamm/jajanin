import { FaStar } from "react-icons/fa";

const StarsReview = () => {
  return (
    <>
      <div className='flex gap-2'>
        <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
          <p>1</p>
          <FaStar className='text-[0.65rem] text-amber-300' />
        </button>
        <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
          <p>2</p>
          <FaStar className='text-[0.65rem] text-amber-300' />
        </button>
        <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
          <p>3</p>
          <FaStar className='text-[0.65rem] text-amber-300' />
        </button>
        <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
          <p>4</p>
          <FaStar className='text-[0.65rem] text-amber-300' />
        </button>
        <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
          <p>5</p>
          <FaStar className='text-[0.65rem] text-amber-300' />
        </button>
      </div>
    </>
  );
};

export default StarsReview;

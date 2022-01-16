import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import type { NextPage } from "next";
import RestaurantReview from "../components/RestaurantReview";

const Home: NextPage = () => {
  return (
    <>
      {/* Header */}
      <div className='flex items-center justify-center flex-col w-full h-[420px] bg-red-500'>
        <h1 className='font-bold text-[70px] text-white'>Jajanin</h1>
        <p className='text-white'>Discover the best food & drinks</p>
        <div className='flex items-center gap-4 w-[715px] bg-white rounded-lg p-1 mt-4'>
          <div className='flex items-center w-[100px] gap-2'>
            <IoLocationSharp className='text-2xl' /> Solo
          </div>
          <div className='flex items-center grow w-full gap-2'>
            <IoSearch className='text-2xl' />
            <input
              type='text'
              placeholder='Search for restaurant, cuisine or a dish'
              className='p-2 w-full focus:ring-0 focus:border-none focus:outline-none'
            />
          </div>
        </div>
      </div>
      {/* Slide Review */}
      <div className='w-[900px] mx-auto my-0'>
        <div className='h-[540px] flex items-center justify-end mx-auto my-0 gap-[60px]'>
          <div className='h-[300px] w-[300px] rounded-lg shadow-lg shadow-black/15'></div>
          <div className='w-[450px] rounded-lg shadow-lg shadow-gray-300/50'>
            <RestaurantReview restaurantName='MCD' customerName={"Lepi"} />
            <RestaurantReview restaurantName='HISANA' customerName={"Raka"} />
            <RestaurantReview restaurantName='KFC' customerName={"Aang"} />
          </div>
        </div>
        <div className='flex justify-end items-center py-2 gap-4'>
          <button>
            <BsArrowLeftCircle className='fill-current text-red-500 text-2xl' />
          </button>
          <button>
            <BsArrowRightCircle className='fill-current text-red-500 text-2xl' />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

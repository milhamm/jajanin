import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import type { NextPage } from "next";
import RestaurantReview from "../components/RestaurantReview";
import CollectionCard from "../components/CollectionCard";

import DefaultLayout from "../components/Layout/DefaultLayout";

const Home: NextPage = () => {
  return (
    <DefaultLayout isHome>
      <div className='flex items-center justify-start flex-col w-full h-[320px] bg-red-500 pt-10'>
        <h1 className='font-["Mazzard"] text-[70px] text-white'>Jajanin</h1>
        <p className='text-white'>Discover the best food & drinks</p>
        {/* Header - Search Bar */}
        <div className='flex items-center gap-4 bg-white rounded-lg p-1 mt-4 mobile:w-[80%] laptop:w-[715px]'>
          <div className='flex items-center w-[100px] gap-2'>
            <IoLocationSharp className='text-2xl fill-current text-red-500 mobile:text-xl' />{" "}
            Solo
          </div>
          <div className='flex items-center grow w-full gap-2'>
            <IoSearch className='text-2xl fill-current text-red-500 mobile:text-xl' />
            <input
              type='text'
              placeholder='Search for restaurant, cuisine or a dish'
              className='p-2 w-full focus:ring-0 focus:border-none focus:outline-none'
            />
          </div>
        </div>
      </div>
      {/* Slide Review */}
      <div className='mx-auto my-0 mt-16 mobile:w-full mobile:container tablet:px-[1rem] laptop:w-[900px]'>
        <div className=' flex items-center justify-between mx-auto gap-[60px] mobile:flex-col laptop:flex-row'>
          <div className='h-[300px] w-[300px] rounded-lg shadow-lg shadow-black/15'></div>
          <div className='w-[450px] rounded-lg shadow-lg shadow-gray-300/50 mobile:w-full mobile:flex mobile:flex-col laptop:w-[450px]'>
            <RestaurantReview restaurantName='MCD' customerName={"Lepi"} />
            <RestaurantReview restaurantName='HISANA' customerName={"Raka"} />
            <RestaurantReview restaurantName='KFC' customerName={"Aang"} />
          </div>
        </div>
        {/* Slide Review - Arrow button */}
        <div className='flex items-center py-2 gap-4 mobile:justify-center laptop:justify-end'>
          <button>
            <BsArrowLeftShort className='fill-current text-red-500 text-2xl rounded-full border border-red-500 hover:bg-red-500 hover:text-white hover:border-transparent' />
          </button>
          <button>
            <BsArrowRightShort className='fill-current text-red-500 text-2xl rounded-full border border-red-500 hover:bg-red-500 hover:text-white hover:border-transparen' />
          </button>
        </div>
      </div>
      {/* Collection */}
      <div className='container my-0 mt-5'>
        <h1 className='font-bold text-2xl'>Restaurant</h1>
        <div className='flex justify-between items-center mobile:text-xs laptop:text-sm'>
          <p className='w-[60%] mobile:w-[50%]'>
            Explore curated lists of top restaurants in Solo
          </p>
          <a
            href=''
            className='text-red-500 hover:underline mobile:w-[50%] text-right'
          >
            All collections in Solo
          </a>
        </div>
        <div className='grid gap-3 mt-8 mb-4 mobile:grid-cols-2 desktop:grid-cols-4'>
          <CollectionCard
            collectionName='Trending this week'
            totalCollection={30}
          />
          <CollectionCard
            collectionName='Trending this week'
            totalCollection={30}
          />
          <CollectionCard
            collectionName='Trending this week'
            totalCollection={30}
          />
          <CollectionCard
            collectionName='Trending this week'
            totalCollection={30}
          />
        </div>
      </div>
      {/* Footer */}
    </DefaultLayout>
  );
};

export default Home;

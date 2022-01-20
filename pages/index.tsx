import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import type { NextPage } from "next";
import RestaurantReview from "../components/RestaurantReview";
import CollectionCard from "../components/CollectionCard";
import Footer from "../components/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      {/* Header */}
      {/* Header - Login */}
      <div className='w-full bg-red-500'>
        <div className='container flex items-center justify-end gap-4 p-5 mobile:justify-start'>
          <button>
            <HiOutlineMenu className='text-white text-[2rem]' />
          </button>
          <Link href='/auth/login'>
            <a>
              <button className='text-white font-semibold px-3 py-1 rounded-lg hover:bg-white hover:text-red-500 mobile:hidden'>
                Log in
              </button>
            </a>
          </Link>
          <button className='text-white font-semibold px-3 py-1 rounded-lg hover:bg-white hover:text-red-500 mobile:hidden'>
            Sign up
          </button>
        </div>
      </div>
      {/* Header - Logo */}
      <div className='flex items-center justify-start flex-col w-full h-[320px] bg-red-500 pt-10'>
        <h1 className='font-["Mazzard"] text-[70px] text-white'>Jajanin</h1>
        <p className='text-white'>Discover the best food & drinks</p>
        {/* Header - Search Bar */}
        <div className='flex items-center gap-4 w-[715px] bg-white rounded-lg p-1 mt-4 mobile:w-[80%]'>
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
      <div className='w-[900px] mx-auto my-0 mt-16 mobile:w-full mobile:container'>
        <div className=' flex items-center justify-between mx-auto gap-[60px] mobile:flex-col'>
          <div className='h-[300px] w-[300px] rounded-lg shadow-lg shadow-black/15'></div>
          <div className='w-[450px] rounded-lg shadow-lg shadow-gray-300/50 mobile:w-full mobile:flex mobile:flex-col'>
            <RestaurantReview restaurantName='MCD' customerName={"Lepi"} />
            <RestaurantReview restaurantName='HISANA' customerName={"Raka"} />
            <RestaurantReview restaurantName='KFC' customerName={"Aang"} />
          </div>
        </div>
        {/* Slide Review - Arrow button */}
        <div className='flex justify-end items-center py-2 gap-4 mobile:justify-center'>
          <button>
            <BsArrowLeftCircle className='fill-current text-red-500 text-2xl' />
          </button>
          <button>
            <BsArrowRightCircle className='fill-current text-red-500 text-2xl' />
          </button>
        </div>
      </div>
      {/* Collection */}
      <div className='container my-0 mt-5'>
        <h1 className='font-bold text-2xl'>Collections</h1>
        <div className='flex justify-between items-center mobile:text-xs'>
          <p className='w-[60%] mobile:w-[50%]'>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Solo, based on trends
          </p>
          <a
            href=''
            className='text-red-500 hover:underline mobile:w-[50%] text-right'
          >
            All collections in Solo
          </a>
        </div>
        <div className='grid grid-cols-4 gap-3 mt-8 mb-4 mobile:grid-cols-2'>
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
      <Footer />
    </>
  );
};

export default Home;

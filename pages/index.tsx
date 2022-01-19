import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import type { NextPage } from "next";
import RestaurantReview from "../components/RestaurantReview";
import CollectionCard from "../components/CollectionCard";
import Footer from "../components/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      {/* Header */}
      <div className='w-full bg-red-500'>
        <div className='container flex justify-end gap-4 p-5'>
          <Link href='/auth/login'>
            <a>
              <button className='text-white font-semibold px-3 py-1 rounded-lg hover:bg-white hover:text-red-500 '>
                Log in
              </button>
            </a>
          </Link>
          <button className='text-white font-semibold px-3 py-1 rounded-lg hover:bg-white hover:text-red-500'>
            Sign up
          </button>
        </div>
      </div>
      <div className='flex items-center justify-start flex-col w-full h-[320px] bg-red-500'>
        <h1 className='font-["Mazzard"] text-[70px] text-white'>Jajanin</h1>
        <p className='text-white'>Discover the best food & drinks</p>
        <div className='flex items-center gap-4 w-[715px] bg-white rounded-lg p-1 mt-4'>
          <div className='flex items-center w-[100px] gap-2'>
            <IoLocationSharp className='text-2xl fill-current text-red-500' />{" "}
            Solo
          </div>
          <div className='flex items-center grow w-full gap-2'>
            <IoSearch className='text-2xl fill-current text-red-500' />
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
        <div className='h-[540px] flex items-center justify-between mx-auto my-0 gap-[60px]'>
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
      {/* Collection */}
      <div className='container my-0 mt-5'>
        <h1 className='font-bold text-2xl'>Collections</h1>
        <div className='flex justify-between items-center'>
          <p>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Solo, based on trends
          </p>
          <a href='' className='text-red-500 hover:underline'>
            All collections in Solo
          </a>
        </div>
        <div className='grid grid-cols-4 gap-3 mt-8 mb-4'>
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

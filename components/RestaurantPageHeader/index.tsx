import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoPinOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import GalleryItem from "../GalleryItem";

const RestaurantPageHeader = () => {
  return (
    <>
      {/* Header */}
      <div className='container pt-14'>
        <div className='flex justify-between items-center gap-5'>
          <h1 className='font-["Mazzard"] text-[2em] text-red-500'>Jajanin</h1>
          <div className='w-[700px] flex items-center gap-2 rounded-lg border-1 px-3 py-1 shadow-sm shadow-gray-200'>
            <IoSearch className='text-2xl' />
            <input
              type='text'
              placeholder='Search for restaurant, cuisine or a dish'
              className='p-2 w-full rounded-lg focus:ring-0 focus:border-none focus:outline-none'
            />
          </div>
          <div className='flex gap-8 text-gray-300'>
            <a href='' className='font-semibold hover:text-red-500'>
              Log In
            </a>
            <a href='' className='font-semibold  hover:text-red-500'>
              Sign Up
            </a>
          </div>
        </div>
        {/* Image */}
        <div className='container h-[340px] flex gap-2 text-white mt-10'>
          <div className='h-full bg-blue-500 w-[60%] relative'>
            <Image
              src='/image/steak.jpg'
              layout='fill'
              objectFit='cover'
              className='hover:scale-125 transition-all duration-700 cursor-pointer'
            />
          </div>
          <div className='grid grid-rows-2 grid-cols-2 w-[40%] gap-2'>
            <GalleryItem srcImage='/image/steaklevel.jpg' />
            <GalleryItem srcImage='/image/steaklevel.jpg' text='View Gallery' />
            <GalleryItem srcImage='/image/steaklevel.jpg' />
            <GalleryItem srcImage='/image/steaklevel.jpg' />
          </div>
        </div>
        {/* Restaurant Details */}
        <div className='container flex justify-between mt-5'>
          <h3 className='text-2xl font-bold'>Restaurant Name</h3>
          <div className='flex gap-5 items-center'>
            <a
              href=''
              className='flex items-center gap-1 bg-teal-400 text-white p-2 rounded-lg'
            >
              <p>4.2</p>
              <FaStar className='text-xs' />
            </a>
            <a href='' className='flex flex-col items-center text-xs'>
              <p>902</p>
              <p>Reviews</p>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          <div className='flex items-center gap-2'>
            <IoPinOutline className='text-red-500 outline-red-500 text-xl' />
            <p className='text-base text-gray-400 font-bold'>Joglo, Solo</p>
          </div>
          <div className='flex items-center gap-2'>
            <AiOutlineClockCircle className='text-red-500 text-xl' />
            <p className='text-base text-gray-400 font-bold'>09:00 AM</p>
          </div>
        </div>
        <button className='flex justify-center items-center text-xs hover:text-white gap-2 mt-5 hover:bg-red-500 rounded-lg h-[25px] p-2 bg-white text-red-500 border border-red-500'>
          <FaStar />
          <p>Add Review</p>
        </button>
      </div>
    </>
  );
};

export default RestaurantPageHeader;

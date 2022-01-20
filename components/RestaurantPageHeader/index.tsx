import { FaStar } from "react-icons/fa";
import { IoPinOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import GalleryItem from "../GalleryItem";
import Header from "../Header";
import { Photo } from "@prisma/client";

type RestaurantPageHeaderProps = {
  name: string;
  photos: Photo[];
};

const RestaurantPageHeader = ({ name, photos }: RestaurantPageHeaderProps) => {
  return (
    <>
      {/* Header */}
      <div className='container pt-14'>
        <Header />
        {/* Image */}
        <div className='container h-[340px] flex gap-2 text-white mt-10'>
          <div className='h-full bg-blue-500 w-[60%] relative'>
            <Image
              src={photos[0].photos}
              layout='fill'
              objectFit='cover'
              className='hover:scale-125 transition-all duration-700 cursor-pointer'
              alt={name}
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
          <h3 className='text-2xl font-bold'>{name}</h3>
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

import { FaStar } from "react-icons/fa";
import { BsPinMapFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import GalleryItem from "../GalleryItem";
import { StoreDetailType } from "../../types/store";
import { timeRange } from "../../helper/timeRange";

type RestaurantPageHeaderProps = {
  store: StoreDetailType;
};

const RestaurantPageHeader = ({ store }: RestaurantPageHeaderProps) => {
  if (!store) return null;
  return (
    <>
      {/* Header */}
      <div className='container pt-14'>
        {/* Image */}
        <div className='h-[340px] flex gap-2 text-white mt-10 mobile:flex-col laptop:flex-row'>
          <div className='h-full bg-blue-500 w-full relative'>
            <Image
              src={store.photos[0].photos}
              layout='fill'
              objectFit='cover'
              className='hover:scale-125 transition-all duration-700 cursor-pointer'
              alt={store.store_name}
            />
          </div>
          <div className='grid grid-rows-2 grid-cols-2 w-full gap-2 mobile:h-full'>
            {store.photos.map((photo, idx) => (
              <GalleryItem key={idx} srcImage={photo.photos} />
            ))}
            <GalleryItem srcImage='/image/steaklevel.jpg' text='View Gallery' />
          </div>
        </div>
        {/* Restaurant Details */}
        <div className='flex justify-between mt-5 mobile:flex-col mobile:gap-2 laptop:flex-row'>
          <h3 className='font-bold mobile:text-xl laptop:text-2xl'>
            {store.store_name}
          </h3>
          <div className='flex gap-5 items-center'>
            <a
              href=''
              className='flex items-center gap-1 bg-teal-400 text-white p-2 rounded-lg mobile:py-1'
            >
              <p className='font-bold'>{store.average_rating?.toFixed(1)}</p>
              <FaStar className='text-xs text-yellow-200' />
            </a>
            <a
              href=''
              className='flex items-center text-xs mobile:flex-row mobile:gap-1 laptop:flex-col'
            >
              <p>{store.count_rating}</p>
              <p>Reviews</p>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          <div className='flex items-center tablet:p-0 laptop:pl-0.5 gap-2'>
            <BsPinMapFill className='text-red-500 mobile:text-xl tablet:text-base laptop:text-base' />
            <p className='text-gray-400 font-bold pl-0.5 mobile:text-xs laptop:text-base'>
              {store.address}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <AiOutlineClockCircle className='text-red-500 mobile:text-base laptop:text-xl' />
            <p className='text-gray-400 font-bold mobile:text-xs laptop:text-base'>
              {timeRange(store.open_time, store.close_time)}
            </p>
          </div>
        </div>
        {/* <button className='flex justify-center items-center text-xs hover:text-white gap-2 mt-5 hover:bg-red-500 rounded-lg h-[25px] p-2 bg-white text-red-500 border border-red-500'>
          <FaStar />
          <p>Add Review</p>
        </button> */}
      </div>
    </>
  );
};

export default RestaurantPageHeader;

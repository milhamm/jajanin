import { FaStar } from "react-icons/fa";
import { IoPinOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import GalleryItem from "../GalleryItem";
import Header from "../Header";
import { StoreDetailType } from "../../types/store";

type RestaurantPageHeaderProps = {
  store: StoreDetailType;
};

const RestaurantPageHeader = ({ store }: RestaurantPageHeaderProps) => {
  if (!store) return null;
  return (
    <>
      {/* Header */}
      <div className='container pt-14'>
        <Header />
        {/* Image */}
        <div className='h-[340px] flex gap-2 text-white mt-10'>
          <div className='h-full bg-blue-500 w-[60%] relative'>
            <Image
              src={store.photos[0].photos}
              layout='fill'
              objectFit='cover'
              className='hover:scale-125 transition-all duration-700 cursor-pointer'
              alt={store.store_name}
            />
          </div>
          <div className='grid grid-rows-2 grid-cols-2 w-[40%] gap-2'>
            {store.photos.map((photo, idx) => (
              <GalleryItem key={idx} srcImage={photo.photos} />
            ))}
            <GalleryItem srcImage='/image/steaklevel.jpg' text='View Gallery' />
          </div>
        </div>
        {/* Restaurant Details */}
        <div className='flex justify-between mt-5'>
          <h3 className='text-2xl font-bold'>{store.store_name}</h3>
          <div className='flex gap-5 items-center'>
            <a
              href=''
              className='flex items-center gap-1 bg-teal-400 text-white p-2 rounded-lg'
            >
              <p>{store.average_rating}</p>
              <FaStar className='text-xs' />
            </a>
            <a href='' className='flex flex-col items-center text-xs'>
              <p>{store.count_rating}</p>
              <p>Reviews</p>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          <div className='flex items-center gap-2'>
            <IoPinOutline className='text-red-500 outline-red-500 text-xl' />
            <p className='text-base text-gray-400 font-bold'>{store.address}</p>
          </div>
          <div className='flex items-center gap-2'>
            <AiOutlineClockCircle className='text-red-500 text-xl' />
            <p className='text-base text-gray-400 font-bold'>{}</p>
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

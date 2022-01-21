import { IoSearch } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";

const HeaderLoggedIn = () => {
  return (
    <div className='container'>
      <div className='flex justify-between items-center gap-5 pt-5'>
        <button className='laptop:hidden'>
          <HiOutlineMenu className='text-red-500 text-[2rem]' />
        </button>
        <h1 className='font-["Mazzard"] text-[2em] text-red-500 mobile:hidden laptop:block'>
          Jajanin
        </h1>
        <div className='w-[700px] flex items-center gap-2 rounded-lg border-1 px-3 py-1 shadow-sm shadow-gray-200 laptop:w-[50%] desktop:w-[700px]'>
          <IoSearch className='text-2xl mobile:text-base' />
          <input
            type='text'
            placeholder='Search for restaurant, cuisine or a dish'
            className='p-2 w-full rounded-lg focus:ring-0 focus:border-none focus:outline-none mobile:text-base'
          />
        </div>
        <button className='flex gap-2 text-gray-300 bg-red-500 p-2 rounded-lg items-center mobile:hidden laptop:flex'>
          <div className='w-[30px] h-[30px] rounded-full overflow-hidden bg-blue-500 relative'>
            <Image src='/image/levi.jpg' objectFit='cover' layout='fill' />
          </div>
          <div>
            <h5 className='font-medium text-white'>Levi Ackerman</h5>
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeaderLoggedIn;

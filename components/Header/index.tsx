import { IoSearch } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  return (
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
      <div className='flex gap-8 text-gray-300 mobile:hidden laptop:flex'>
        <Link href='/auth/login'>
          <a className='font-semibold hover:text-red-500'>Log In</a>
        </Link>
        <Link href='/auth/register'>
          <a className='font-semibold hover:text-red-500'>Sign Up</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;

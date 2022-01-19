import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  return (
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

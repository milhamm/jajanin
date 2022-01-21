import * as React from "react";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

type HeaderProps = {
  isHome?: boolean;
};

type ProfileProps = {
  image: string;
  name: string;
};

const Profile = ({ image, name }: ProfileProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className='relative z-50'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className='flex gap-2 text-gray-300 bg-red-500 p-2 rounded-lg items-center mobile:hidden laptop:flex'>
        <div className='w-[30px] h-[30px] rounded-full overflow-hidden bg-blue-500 relative'>
          <Image
            src={image}
            objectFit='cover'
            layout='fill'
            alt='profilPicture'
          />
        </div>
        <div>
          <h5 className='font-medium text-white truncate max-w-[200px]'>
            {name}
          </h5>
        </div>
      </button>
      {isOpen && (
        <div className='shadow-lg absolute bg-white rounded p-2 right-0 w-full'>
          <div
            className='p-2 hover:bg-zinc-100 rounded cursor-pointer text-red-500'
            onClick={async () => {
              await signOut({ redirect: false });
            }}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

const Header = ({ isHome = false }: HeaderProps) => {
  const { data: session, status } = useSession();

  return (
    <div className='flex justify-between items-center gap-5 pt-5'>
      {!isHome ? (
        <>
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
          {status === "loading" ? (
            <p>Loading . . .</p>
          ) : status === "unauthenticated" ? (
            <div className='flex gap-8 text-gray-300 mobile:hidden laptop:flex'>
              <Link href='/auth/login'>
                <a className='font-semibold hover:text-red-500'>Log In</a>
              </Link>
              <Link href='/auth/register'>
                <a className='font-semibold hover:text-red-500'>Sign Up</a>
              </Link>
            </div>
          ) : (
            <Profile
              name={session?.user?.name as string}
              image={session?.user?.image as string}
            />
          )}
        </>
      ) : (
        <div className='container flex items-center gap-4 p-5 mobile:justify-start laptop:justify-end'>
          <button>
            <HiOutlineMenu className='text-white text-[2rem] laptop:hidden' />
          </button>
          {status === "authenticated" ? (
            <Profile
              name={session?.user?.name as string}
              image={session?.user?.image as string}
            />
          ) : status === "loading" ? (
            <p className='text-white'>Loading . . .</p>
          ) : (
            <>
              <Link href='/auth/login'>
                <a>
                  <button className='text-white font-semibold px-3 py-1 rounded-lg hover:bg-white hover:text-red-500 mobile:hidden laptop:block'>
                    Log in
                  </button>
                </a>
              </Link>
              <button className='text-white font-semibold px-3 py-1 rounded-lg hover:bg-white hover:text-red-500 mobile:hidden laptop:block'>
                Sign up
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;

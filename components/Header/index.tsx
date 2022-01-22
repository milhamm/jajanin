import * as React from "react";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import useStore from "../../hooks/useStore";
import { useDebounce } from "../../hooks/useDebounce";

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
      className='relative'
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
              await signOut();
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
  const [searchText, setSearchedText] = React.useState("");
  const debouncedValue = useDebounce<string>(searchText, 500);
  const { searched } = useStore({ search: debouncedValue });

  return (
    <div className='flex justify-between items-center gap-5 pt-5'>
      {!isHome ? (
        <>
          <button className='laptop:hidden'>
            <HiOutlineMenu className='text-red-500 text-[2rem]' />
          </button>
          <Link href='/'>
            <a>
              <h1 className='font-["Mazzard"] text-[2em] text-red-500 mobile:hidden laptop:block'>
                Jajanin
              </h1>
            </a>
          </Link>
          <div className='w-[700px] flex items-center gap-2 rounded-lg border-1 px-3 py-1 shadow-sm shadow-gray-200 laptop:w-[50%] desktop:w-[700px] relative'>
            <IoSearch className='text-2xl mobile:text-base' />
            <input
              onChange={(e) => setSearchedText(e.target.value)}
              type='text'
              placeholder='Search for restaurant, cuisine or a dish'
              className='p-2 w-full rounded-lg focus:ring-0 focus:border-none focus:outline-none mobile:text-base'
            />

            {debouncedValue !== "" && searched ? (
              <div className='absolute w-full bg-white shadow-lg inset-x-0 top-[4.2rem] rounded p-2'>
                {searched?.data.length > 0 ? (
                  searched?.data.map((store) => (
                    <Link href={`/store/${store.slug}`} key={store.id}>
                      <a>
                        <div className='w-full flex gap-4 hover:bg-gray-100 p-4 cursor-pointer rounded-lg'>
                          <div className='w-full grow'>
                            <p className='font-bold'>{store.store_name}</p>
                            <p>{store.address}</p>
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))
                ) : (
                  <div className='w-full flex gap-4 p-4'>
                    <div className='w-full'>
                      <p className='text-center'>Not Found</p>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
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

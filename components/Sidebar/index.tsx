import Link from "next/link";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { signOut } from "next-auth/react";

type SidebarProps = {
  show: boolean;
  onClose: () => void;
  name: string | null | undefined;
  image: string | null | undefined;
};

const Sidebar = ({ show, onClose, name, image }: SidebarProps) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 300);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className='bg-white w-full h-screen absolute inset-0 p-4 z-[999]'
          transition={{ type: "tween", duration: 0.3, ease: "easeIn" }}
          initial={{ y: window.innerHeight + 30 }}
          animate={{ y: 0 }}
          exit={{ y: window.innerHeight + 30 }}
        >
          <div className='w-full flex items-center justify-center mb-4 border-b border-gray-300 pb-4 relative'>
            <h1 className='font-["Mazzard"] text-[2em] text-red-500'>
              Jajanin
            </h1>
            <button className='absolute right-0' onClick={onClose}>
              <IoClose className='text-2xl text-red-500 hover:text-red-300' />
            </button>
          </div>

          {name ? (
            <div className='w-full flex flex-col items-center border-b border-red-500/20 mb-5'>
              <div className='w-[100px] h-[100px] relative border-4 border-red-500 rounded-full'>
                <Image
                  src={image as string}
                  layout='fill'
                  className='rounded-full '
                  objectFit='cover'
                  alt={name}
                />
              </div>
              <p className='font-bold my-5 text-gray-500'>{name}</p>
            </div>
          ) : null}

          <div className='w-full mb-5'>
            <Link href='/'>
              <a>
                <div className='p-4 hover:bg-gray-100 cursor-pointer rounded'>
                  Home
                </div>
              </a>
            </Link>
            <Link href='/about'>
              <a>
                <div className='p-4 hover:bg-gray-100 cursor-pointer rounded'>
                  About Us
                </div>
              </a>
            </Link>
          </div>

          {!name ? (
            <div className='flex gap-2'>
              <Link href='/auth/login'>
                <a className='w-full'>
                  <div className='w-full py-1 grid place-items-center px-6 border border-red-500 rounded text-gray-800 hover:bg-red-500 hover:text-white cursor-pointer'>
                    <p className='font-bold m-0'>Login</p>
                  </div>
                </a>
              </Link>
              <Link href='/auth/register'>
                <a className='w-full'>
                  <div className='w-full py-1 grid place-items-center px-6 border border-red-500 rounded text-gray-800 hover:bg-red-500 hover:text-white cursor-pointer'>
                    <p className='font-bold m-0'>Register</p>
                  </div>
                </a>
              </Link>
            </div>
          ) : (
            <div
              className='w-full py-1 grid place-items-center px-6 border border-red-500 rounded text-gray-800 hover:bg-red-500 hover:text-white cursor-pointer'
              onClick={async () => {
                await signOut();
              }}
            >
              <p className='font-bold m-0'>Logout</p>
            </div>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Sidebar;

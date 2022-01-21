import { IoClose } from "react-icons/io5";

const addMenu = () => {
  return (
    <>
      <div className='mx-auto mt-8 flex flex-col gap-5 mobile:w-[85%] laptop:w-[725px] laptop:px-5 shadow shadow-gray-300 p-3 rounded-lg'>
        <div className='flex justify-center'>
          <h1 className='font-["Mazzard"] text-[2em] text-red-500 laptop:block'>
            Jajanin
          </h1>
        </div>
        <div className='flex justify-between items-center'>
          <div className='font-bold'>Add Menu</div>
          <button>
            <IoClose className='text-2xl text-red-500 hover:text-red-300' />
          </button>
        </div>
        <div className='flex flex-col gap-5'>
          <div>
            <textarea
              name='foodType'
              id='foodType'
              placeholder='Jenis makanan (Makanan, Minuman dan dll)'
              className='w-full border rounded-lg p-2 text-justify outline-none focus:border-transparent focus:outline-red-500 mobile:text-xs'
            ></textarea>
          </div>
          <div>
            <textarea
              name='foodName'
              id='foodName'
              placeholder='Nama makanan atau minuman'
              className='w-full border rounded-lg p-2 text-sm text-justify outline-none focus:border-transparent focus:outline-red-500 mobile:text-xs'
            ></textarea>
          </div>
          <div>
            <textarea
              name='foodDetails'
              id='foodDetails'
              placeholder='Detail makanan'
              className='w-full border rounded-lg p-2 text-sm text-justify outline-none focus:border-transparent focus:outline-red-500 mobile:text-xs'
            ></textarea>
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-sm'>Rp</p>
            <input
              type='number'
              name='foodPrice'
              id='foodPrice'
              placeholder='ex: 10000'
              className='border rounded-lg px-2 py-1 outline-none focus:border-transparent focus:outline-red-500 mobile:text-xs'
            />
          </div>
          <div>
            <input
              name='foodIMG'
              id='foodIMG'
              type='text'
              placeholder='https://media.discordapp.net/attachments/'
              className='w-full border rounded-lg px-2 py-1 outline-none focus:border-transparent focus:outline-red-500 mobile:text-xs'
            ></input>
          </div>
          <div className='flex justify-end'>
            <button className='w-[100px] bg-teal-400 text-white text-sm font-bold hover:bg-teal-300 rounded-lg px-2 py-1 '>
              Add Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default addMenu;

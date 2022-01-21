import { IoClose } from "react-icons/io5";
import Image from "next/image";
import StarsReview from "../../components/StarsReview";

const addReview = () => {
  return (
    <>
      <div className='mx-auto mt-8 flex flex-col gap-5 mobile:w-[85%] laptop:w-[769px] laptop:px-5'>
        <div className='flex flex-col gap-5 px-4 py-3 rounded-lg shadow shadow-gray-300'>
          <div className='flex justify-center'>
            <h1 className='font-["Mazzard"] text-[2em] text-red-500 laptop:block'>
              Jajanin
            </h1>
          </div>
          <div className='flex justify-between'>
            <p className='font-bold'>Add Review</p>
            <button>
              <IoClose className='text-2xl text-red-500 hover:text-red-300' />
            </button>
          </div>
          <StarsReview />
          <div className='flex'>
            <button className='flex gap-2 p-2 rounded-lg'>
              <div className='w-[30px] h-[30px] rounded-full overflow-hidden bg-blue-500 relative'>
                <Image
                  src='/image/levi.jpg'
                  objectFit='cover'
                  layout='fill'
                  alt='profilPicture'
                />
              </div>
            </button>
            <div className='w-full'>
              <textarea
                name='add-review'
                id='addReview'
                placeholder='Write your review'
                rows={3}
                className='w-full border rounded-lg p-2 text-sm text-justify outline-none focus:border-transparent focus:outline-red-500'
              ></textarea>
            </div>
          </div>
          <div className='flex justify-end'>
            <button className='w-[130px] bg-teal-400 text-white text-sm font-bold hover:bg-teal-300 rounded-lg px-2 py-1 '>
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default addReview;

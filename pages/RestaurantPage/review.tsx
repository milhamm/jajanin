import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import { FaStar, FaRegThumbsUp, FaRegCommentDots } from "react-icons/fa";
import { VscEdit } from "react-icons/vsc";
import Image from "next/image";

const review = () => {
  return (
    <>
      <RestaurantPageHeader store={null} />
      <main className='container mt-5 flex gap-4'>
        <section className='flex flex-col gap-4'>
          {/* Restaurant Reviews */}
          <div>
            <h3 className='font-semibold text-lg'>RestaurantName Reviews</h3>
          </div>
          <div className='flex items-center gap-3'>
            <div className='w-[44px] h-[44px] rounded-full overflow-hidden bg-blue-500 relative'>
              <Image src='/image/levi.jpg' objectFit='cover' layout='fill' />
            </div>
            <div>
              <h5 className='font-bold'>Levi Ackerman</h5>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1 bg-teal-400 text-white w-fit px-2 py-1 rounded-lg'>
              <p>5</p>
              <FaStar className='text-[0.65rem]' />
            </div>
            <div>
              <p className='text-sm text-gray-400'>4 months ago</p>
            </div>
          </div>
          <div>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea
              voluptates architecto magni totam neque laudantium perferendis
              inventore dolorum natus a mollitia repudiandae molestias quisquam
              exercitationem voluptatum nemo amet minima, esse eos? Quasi, eius
              natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem excepturi nobis sed et est. Dolores esse velit maxime
              ipsa deserunt. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Excepturi sunt ex non vitae optio maiores eligendi ducimus
              quod earum quae.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-2 h-[150px]'>
            <div className='w-full h-full relative'>
              <Image
                src='/image/steak-user-photo.jpg'
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
            <div className='w-full h-full relative'>
              <Image
                src='/image/steak-user-photo.jpg'
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
            <div className='w-full h-full relative'>
              <Image
                src='/image/steak-user-photo.jpg'
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
          </div>
          <div className='flex gap-2 text-gray-500 text-sm'>
            <a href=''>0 Votes for helpful</a>
            <a href=''>0 Comments</a>
          </div>
          <div className='flex gap-7 text-sm text-gray-500 mb-5'>
            <button className='flex items-center gap-2 hover:text-teal-400'>
              <FaRegThumbsUp />
              Helpful
            </button>
            <button className='flex items-center gap-2 hover:text-cyan-500'>
              <FaRegCommentDots />
              Comment
            </button>
            <button className='flex items-center gap-2 hover:text-red-500'>
              <VscEdit />
              Edit
            </button>
          </div>
        </section>
        <aside className='flex flex-col h-fit gap-5 items-start p-5 rounded-lg shadow shadow-gray-300'>
          <p className='font-medium text-left'>Rate your dining experience</p>
          <div className='flex gap-2'>
            <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
              <p>1</p>
              <FaStar className='text-[0.65rem]' />
            </button>
            <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
              <p>2</p>
              <FaStar className='text-[0.65rem]' />
            </button>
            <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
              <p>3</p>
              <FaStar className='text-[0.65rem]' />
            </button>
            <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
              <p>4</p>
              <FaStar className='text-[0.65rem]' />
            </button>
            <button className='flex items-center gap-1 border text-gray-400 w-fit px-2 py-1 rounded-lg hover:bg-teal-400 hover:text-white hover:border-transparent'>
              <p>5</p>
              <FaStar className='text-[0.65rem]' />
            </button>
          </div>
          <a href='' className='text-red-500'>
            Write a Review
          </a>
        </aside>
      </main>
    </>
  );
};

export default review;

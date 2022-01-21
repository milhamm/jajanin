import { FaStar, FaRegThumbsUp } from "react-icons/fa";
import { VscEdit } from "react-icons/vsc";
import Image from "next/image";

const UserReview = () => {
  return (
    <>
      <div className='flex items-center gap-3'>
        <div className='w-[44px] h-[44px] rounded-full overflow-hidden bg-blue-500 relative'>
          <Image
            src='/image/levi.jpg'
            objectFit='cover'
            layout='fill'
            alt='profilPicture'
          />
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
        <p className='text-gray-500 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea
          voluptates architecto magni totam neque laudantium perferendis
          inventore dolorum natus a mollitia repudiandae molestias quisquam
          exercitationem voluptatum nemo amet minima, esse eos? Quasi, eius
          natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatem excepturi nobis sed et est. Dolores esse velit maxime ipsa
          deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Excepturi sunt ex non vitae optio maiores eligendi ducimus quod earum
          quae.
        </p>
      </div>
      <div className='flex gap-2 text-gray-500 text-sm'>
        <a href=''>0 Votes for helpful</a>
      </div>
      <div className='flex gap-4 text-sm text-gray-500 mb-5'>
        <button className='flex items-center gap-2 hover:text-teal-400'>
          <FaRegThumbsUp />
          Helpful
        </button>
        <button className='flex items-center gap-2 hover:text-red-500'>
          <VscEdit />
          Edit
        </button>
      </div>
    </>
  );
};

export default UserReview;

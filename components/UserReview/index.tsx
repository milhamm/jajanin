import { FaStar, FaRegThumbsUp } from "react-icons/fa";
import { VscEdit } from "react-icons/vsc";
import Image from "next/image";
import { ReviewWithUser } from "../../types/store";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import { useSession } from "next-auth/react";
import useReview from "../../hooks/useReview";
dayjs.extend(RelativeTime);

type UserReviewProps = {
  review: ReviewWithUser;
  slug: string;
};

const UserReview = ({ review, slug }: UserReviewProps) => {
  const { data: session } = useSession() as any;
  const { voteReview, deleteReview } = useReview(review.id, slug);

  return (
    <>
      <div className='flex items-center gap-3'>
        <div className='w-[44px] h-[44px] rounded-full overflow-hidden bg-blue-500 relative'>
          <Image
            src={review.user.image as string}
            objectFit='cover'
            layout='fill'
            alt='Fill User'
          />
        </div>
        <div>
          <h5 className='font-bold'>{review.user.name}</h5>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-1 bg-teal-400 text-white w-fit px-2 py-1 rounded-lg'>
          <p>{review.rating}</p>
          <FaStar className='text-[0.65rem]' />
        </div>
        <div>
          <p className='text-sm text-gray-400'>
            {dayjs(review.createdAt).fromNow()}
          </p>
        </div>
      </div>
      <div className='w-full'>
        <p className='text-gray-500 text-justify'>{review.comment}</p>
      </div>
      <div className='flex gap-2 text-gray-500 text-sm'>
        <a href=''>{review._count.votes} Votes for helpful</a>
      </div>
      <div className='flex gap-4 text-sm  mb-5'>
        {session?.user?.id && (
          <button
            className={`flex items-center gap-2  ${
              review.votes.length > 0
                ? "text-teal-400 hover:text-gray-500"
                : "text-gray-500 hover:text-teal-400"
            }`}
            onClick={async () => {
              if (review.votes.length === 0) {
                await voteReview();
              } else {
                await deleteReview(review.votes[0].id);
              }
            }}
          >
            <FaRegThumbsUp />
            Helpful
          </button>
        )}

        {session?.user?.id === review.user.id && (
          <button className='flex items-center gap-2 hover:text-red-500'>
            <VscEdit />
            Edit
          </button>
        )}
      </div>
    </>
  );
};

export default UserReview;

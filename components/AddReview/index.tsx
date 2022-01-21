/* eslint-disable no-unused-vars */
import * as React from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import StarsReview from "../../components/StarsReview";
import { useSession } from "next-auth/react";
import api from "../../client/api";
import { StoreDetailType } from "../../types/store";
import { useSWRConfig } from "swr";

type AddReviewProps = {
  store: StoreDetailType;
  handleClose: () => void;
  handleOnChange: (selectedR: number) => void;
  selectedRating: number;
};

const AddReview = ({
  store,
  handleClose,
  handleOnChange,
  selectedRating,
}: AddReviewProps) => {
  const { data: session } = useSession();
  const [text, setText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { mutate } = useSWRConfig();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const payload = {
        comment: text,
        rating: selectedRating,
      };

      await api.post(`/store/${store?.id}/reviews`, payload);
      mutate(`/store/${store?.slug}`);
      handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative z-20'>
      <div className='mx-auto mt-8 flex flex-col gap-5 mobile:w-[85%] laptop:w-[769px] laptop:px-5 '>
        <div className='flex flex-col gap-5 px-4 py-3 rounded-lg shadow shadow-gray-300  bg-white'>
          <div className='flex justify-between'>
            <p className='font-bold'>Add Review</p>
            <button onClick={handleClose}>
              <IoClose className='text-2xl text-red-500' />
            </button>
          </div>
          <StarsReview
            handleOnChange={handleOnChange}
            selectedRating={selectedRating}
          />
          <div className='flex'>
            <button className='flex gap-2 p-2 rounded-lg'>
              <div className='w-[30px] h-[30px] rounded-full overflow-hidden bg-blue-500 relative'>
                <Image
                  src={session?.user?.image as string}
                  objectFit='cover'
                  layout='fill'
                  alt='profilPicture'
                />
              </div>
            </button>
            <div className='w-full'>
              <textarea
                onChange={(e) => setText(e.target.value)}
                name='add-review'
                id='addReview'
                placeholder='Write your review'
                rows={3}
                className='w-full border rounded-lg p-2 text-sm text-justify focus:outline-none'
              ></textarea>
            </div>
          </div>
          <div className='flex justify-end'>
            <button
              className='w-[140px] bg-teal-400 text-white text-sm font-extrabold hover:bg-teal-300 rounded-lg px-2 py-1'
              onClick={() => handleSubmit()}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;

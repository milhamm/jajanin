/* eslint-disable no-unused-vars */
import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import * as React from "react";
import { FaStar } from "react-icons/fa";
import Modal from "react-modal";
import { StoreDetailType } from "../../types/store";
import AddReview from "../AddReview";

type ButtonRatingProps = {
  number: number;
  isSelected: boolean;
  handleOnChange: (selectedR: number) => void;
};

const ButtonRating = ({
  number,
  handleOnChange,
  isSelected,
}: ButtonRatingProps) => {
  return (
    <button
      className={`flex items-center gap-1 border w-fit px-2 py-1 rounded-lg ${
        isSelected ? "bg-teal-400 text-white" : "text-gray-400 "
      } hover:bg-teal-400 hover:text-white hover:border-transparent`}
      onClick={() => handleOnChange(number)}
    >
      <p>{number}</p>
      <FaStar className='text-[0.65rem]' />
    </button>
  );
};

const SideRating = ({ store }: { store: StoreDetailType }) => {
  const [selectedRating, setSelectedRating] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const { status } = useSession();
  const router = useRouter();

  return (
    <aside className='flex flex-col h-fit gap-5 items-start p-5 rounded-lg shadow shadow-gray-300'>
      <p className='font-medium text-left'>Rate your dining experience</p>
      <div className='flex gap-2'>
        {Array.from(Array(5).keys()).map((rating) => (
          <ButtonRating
            key={rating}
            number={rating + 1}
            handleOnChange={(selectedR) => setSelectedRating(selectedR)}
            isSelected={selectedRating === rating + 1}
          />
        ))}
      </div>
      <p
        onClick={() => {
          if (status === "unauthenticated") {
            router.push("/auth/login");
          } else {
            setIsOpen(true);
          }
        }}
        className='text-red-500 cursor-pointer'
      >
        Write a Review
      </p>
      <Modal
        isOpen={isOpen}
        className='w-full p-0 m-0 overflow-none z-20'
        onRequestClose={() => setIsOpen(false)}
        preventScroll
      >
        <AddReview
          store={store}
          selectedRating={selectedRating}
          handleOnChange={(selectedR) => setSelectedRating(selectedR)}
          handleClose={() => setIsOpen(false)}
        />
      </Modal>
    </aside>
  );
};

export default SideRating;

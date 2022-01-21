import Image from "next/image";

type GalleryItemProps = {
  srcImage: string;
  text?: string;
};

const GalleryItem = ({ srcImage, text }: GalleryItemProps) => {
  return (
    <div className='w-full h-full relative place-items-center grid hover:cursor-pointer'>
      <Image
        src={srcImage}
        layout='fill'
        objectFit='cover'
        alt='profilPicture'
        className='hover:scale-125 transition-all duration-700 cursor-pointer'
      />
      {text ? (
        <div className='absolute bg-black/50 w-full h-full place-items-center grid'>
          <p className='z-50 hover:cursor-pointer'>{text}</p>
        </div>
      ) : null}
    </div>
  );
};

export default GalleryItem;

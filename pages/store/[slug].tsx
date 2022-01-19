import { useRouter } from "next/dist/client/router";
import * as React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiArrowRightSFill, RiDirectionFill } from "react-icons/ri";
import Menu from "../../components/Menu";
import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import { currencyFormat } from "../../helper/currencyFormat";
import useStore from "../../hooks/useStore";

const RestaurantPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const { store } = useStore(slug);

  console.log(store);

  if (!store?.data) return null;

  return (
    <>
      <RestaurantPageHeader
        name={store.data.store_name}
        photos={store.data.photos}
      />
      <main className='container mt-5 flex gap-4'>
        <section className='flex flex-col grow gap-5'>
          {/* Menu */}
          <div className='flex justify-between items-centered mb-2'>
            <h3 className='font-semibold text-lg'>Menu</h3>
            <a href='' className='text-red-500 flex items-center'>
              See all menus
              <RiArrowRightSFill />
            </a>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <Menu menuName='Beverages' />
            <Menu menuName='Beverages' />
            <Menu menuName='Beverages' />
          </div>
          <div>
            <h3 className='font-semibold text-lg mb-2'>Average Cost</h3>
            <p>{currencyFormat(store.data.average_cost)} (approx.)</p>
          </div>
          <div className=''>
            <h3 className='font-semibold text-lg mb-2'>More Info</h3>
            <div className='grid grid-cols-2'>
              {store.data.more_info.split(",").map((item) => (
                <div className='flex items-center gap-2' key={item}>
                  <BiCheckCircle className='fill-current text-green-500' />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <aside className='flex flex-col h-fit gap-5 border rounded-lg p-5 shadow shadow-gray-300'>
          <div className='flex flex-col'>
            <p className='font-semibold text-lg'>Call</p>
            <a href='' className='text-red-500'>
              +62-821-8888-7777
            </a>
            <a href='' className='text-red-500'>
              +62-821-8888-7777
            </a>
          </div>
          <div>
            <p className='font-semibold text-lg'>Direction</p>
            <div>Maps</div>
            <p>Jl. P.H.H. Mustofa No. 31, Surapati, Bandung</p>
            <div className='flex gap-4'>
              <div className='flex justify-center items-center gap-2 border px-2 rounded-lg'>
                <MdOutlineContentCopy />
                <button>Copy</button>
              </div>
              <div className='flex justify-center items-center gap-2 border px-2 py-1 rounded-lg'>
                <RiDirectionFill />
                <button>Direction</button>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default RestaurantPage;

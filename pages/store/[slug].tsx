import { useRouter } from "next/dist/client/router";
import * as React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { RiArrowRightSFill } from "react-icons/ri";
import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import { currencyFormat } from "../../helper/currencyFormat";
import useStore from "../../hooks/useStore";
import Error from "next/error";
import MenuGrid from "../../components/MenuGrid";
import Maps from "../../components/Maps";

const RestaurantPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const { store, error } = useStore(slug);

  console.log(error);
  if (error) {
    return <Error statusCode={404} />;
  }

  if (!store?.data) {
    return (
      <div className='w-full h-screen grid place-items-center'>
        Loading . . .
      </div>
    );
  }

  return (
    <>
      <RestaurantPageHeader store={store.data} />
      <main className='container mt-5 flex gap-4 mobile:flex-col'>
        <section className='flex flex-col grow gap-5'>
          {/* Menu */}
          <div className='flex justify-between items-centered mb-2'>
            <h3 className='font-semibold text-lg'>Menu</h3>
            <a href='' className='text-red-500 flex items-center'>
              See all menus
              <RiArrowRightSFill />
            </a>
          </div>
          <MenuGrid menus={store.data.menus} />
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
              {store.data.phone_number}
            </a>
          </div>
          <Maps
            address={store.data.address}
            lat={store.data.latitude}
            long={store.data.longitude}
          />
        </aside>
      </main>
    </>
  );
};

export default RestaurantPage;

import MenuList from "../../components/MenuList";
import RestaurantPageHeader from "../../components/RestaurantPageHeader";

const menu = () => {
  return (
    <>
      <RestaurantPageHeader />
      <main className='container mt-5 flex gap-4'>
        <section className='w-full'>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-lg'>Restaurant Menu</h3>
            <button className='text-red-500 text-base border border-red-500 font-black hover:bg-red-500 hover:text-white px-2 py-1 rounded-lg'>
              Add menu +
            </button>
          </div>
          <div className='flex justify-between items-center mt-10 mb-5 gap-4'>
            <div className='flex flex-col gap-5'>
              <p className='font-semibold text-lg'>Makanan</p>
              <MenuList />
              <MenuList />
              <MenuList />
            </div>
            <div className='flex flex-col gap-5'>
              <p className='font-semibold text-lg'>Minuman</p>
              <MenuList />
              <MenuList />
              <MenuList />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default menu;

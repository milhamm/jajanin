import DefaultLayout from "../../components/Layout/DefaultLayout";
import TeamCard from "../../components/TeamCard";

const aboutUs = () => {
  return (
    <>
      <DefaultLayout>
        <header className='w-full bg-red-500 h-[300px]'>
          <div className='w-full h-full flex justify-center items-center'>
            <div className='text-white text-[3em] absolute text-center font-["Mazzard"]'>
              Jajanin
            </div>
          </div>
        </header>
        <main className='container flex flex-col mt-14 mb-5 gap-14'>
          <div className='flex flex-col items-center w-full gap-5'>
            <h1 className='font-black text-[2em] text-red-500'>
              What is Jajanin?
            </h1>
            <div className='flex justify-center items-center shadow shadow-gray-300 rounded-lg px-3 py-5 mobile:flex-col mobile:gap-5 laptop:flex-row'>
              <span className='w-[50%] text-center font-["Mazzard"] text-[4em] text-red-500 mobile:w-full'>
                Jajanin
              </span>
              <p className='text-justify w-[50%] mobile:w-full'>
                <span className='font-extrabold'>Jajanin</span> web application
                is a web reviewer app where the user can see any review on any
                UMKM food that they like. It can be street food or a small
                restaurant. Our application is an open source application means
                that this app can be used or developed by anyone. By using this
                app, users can find out which UMKM food has a good review so
                that the user can decide whether they should try this product or
                not. Besides being able to see a review from another person. The
                user also cna review the food on their own, so that they can
                also help people that are looking for some UMKM food by using
                their review. Our apps are very easy to use because our app
                concept is user friendly. So that it can reach many people from
                many backgrounds.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center w-full gap-5 rounded-lg'>
            <h1 className='font-black text-[2em] text-red-500'>
              Meet Our Team!
            </h1>
            <div className='grid grid-cols-3 justify-items-center gap-5 mb-5 mobile:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3'>
              <TeamCard
                teamSourceImage='/image/kwasonk.png'
                teamPersonName='Khaidir Mauladan'
                teamPersonPosition='1301192327'
              />
              <TeamCard
                teamSourceImage='/image/aangdit.png'
                teamPersonName='Muhammad Ilham Mubarak'
                teamPersonPosition='1301194276'
              />
              <TeamCard
                teamSourceImage='/image/lepidit.png'
                teamPersonName='Muhammad Furqon Fahlevi'
                teamPersonPosition='1301194214'
              />
              <TeamCard
                teamSourceImage='/image/dudfruit.png'
                teamPersonName='Putu Budi Sukarya Putra P.O.'
                teamPersonPosition='1301194252'
              />
              <TeamCard
                teamSourceImage='/image/handit.png'
                teamPersonName='Akmal Raafid Taufiqurrahman'
                teamPersonPosition='1301192218'
              />
            </div>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
};

export default aboutUs;

import { useRouter } from "next/dist/client/router";
import * as React from "react";
import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import useStore from "../../hooks/useStore";
import Error from "next/error";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import SideInfo from "../../components/SideInfo";
import OverviewSection from "../../components/Detail/Overview";

const RestaurantPage = () => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const { store, error } = useStore(slug);

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

  const { data } = store;

  return (
    <>
      <RestaurantPageHeader store={data} />
      <main className='container mt-5 flex gap-8 mobile:flex-col laptop:flex-row laptop:mb-5'>
        <section className='flex flex-col grow gap-5'>
          <Tabs defaultActiveKey='1' onChange={() => {}}>
            <TabPane tab='Overview' key='1'>
              <OverviewSection
                avg={data.average_cost}
                menus={data.menus}
                more_info={data.more_info}
              />
            </TabPane>
            <TabPane tab='Reviews' key='2'>
              aaaa
            </TabPane>
            <TabPane tab='Menu' key='3'>
              aaaa
            </TabPane>
          </Tabs>
        </section>
        <SideInfo
          phone={store.data.phone_number}
          address={store.data.address}
          lat={store.data.latitude}
          long={store.data.longitude}
        />
      </main>
    </>
  );
};

export default RestaurantPage;

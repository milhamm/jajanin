import { useRouter } from "next/dist/client/router";
import * as React from "react";
import RestaurantPageHeader from "../../components/RestaurantPageHeader";
import useStore from "../../hooks/useStore";
import Error from "next/error";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import OverviewSection from "../../components/Detail/Overview";
import MenuSection from "../../components/Detail/MenuSection";
import ReviewSection from "../../components/Detail/ReviewSection";
import DefaultLayout from "../../components/Layout/DefaultLayout";

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
    <DefaultLayout>
      <RestaurantPageHeader store={data} />
      <main className='container'>
        <Tabs defaultActiveKey='1' onChange={() => {}}>
          <TabPane tab='Overview' key='1'>
            <section className='flex flex-col grow gap-5'>
              <OverviewSection
                avg={data.average_cost}
                menus={data.menus}
                more_info={data.more_info}
                address={data.address}
                long={data.longitude}
                lat={data.latitude}
                phone={data.phone_number}
              />
            </section>
          </TabPane>
          <TabPane tab='Reviews' key='2'>
            <ReviewSection store={data} />
          </TabPane>
          <TabPane tab='Menu' key='3'>
            <MenuSection menus={data.menus} />
          </TabPane>
        </Tabs>
      </main>
    </DefaultLayout>
  );
};

export default RestaurantPage;

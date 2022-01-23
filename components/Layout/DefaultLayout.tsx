import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";

type DefaultLayoutProps = {
  children: React.ReactNode;
  isHome?: boolean;
};

const DefaultLayout = ({ children, isHome = false }: DefaultLayoutProps) => {
  return (
    <div className='relative min-h-screen pb-[120px]'>
      <div
        className={`${
          isHome ? "bg-red-500" : "bg-white container"
        } w-full z-50 relative`}
      >
        <Header isHome={isHome} />
      </div>
      <main className='mb-4'>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

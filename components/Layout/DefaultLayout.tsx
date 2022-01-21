import * as React from "react";
import Footer from "../Footer";
import Header from "../Header";

type DefaultLayoutProps = {
  children: React.ReactNode;
  isHome?: boolean;
};

const DefaultLayout = ({ children, isHome = false }: DefaultLayoutProps) => {
  return (
    <>
      <div className={`${isHome ? "bg-red-500" : "bg-white container"} w-full`}>
        <Header isHome={isHome} />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;

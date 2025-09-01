import type { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

type Iprops={
  children:ReactNode
}

export default function CommonLayout({children}:Iprops) {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>

    </div>
  );
}
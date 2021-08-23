import React from "react";
import Navbar from "./components/navbar";
import Services from "./components/Services";
import Team from "../src/components/Team";
import ContactandFooter from "../src/components/Contact"
import Footer from "../src/components/Footer"

import Tempelement from "./components/tempdelete/Tempelement";
import Banner from "./components/tempdelete/Banner";
const App = () => {
  return (
    <>
    <Navbar />
    <Services />
    <Team />
    <ContactandFooter />
    <Tempelement />
    <Banner />
    <Footer />
    </>
  );
};

export default App;

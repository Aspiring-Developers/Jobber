import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Router from "../Router";

function Layout() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default Layout;

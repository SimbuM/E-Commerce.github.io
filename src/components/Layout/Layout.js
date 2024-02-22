import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Toolbar } from "@mui/material";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Toolbar sx={{marginBottom:"50px"}}/>
      <Footer />
    </>
  );
};

export default Layout;

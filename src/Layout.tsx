import React from "react";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={style.wrapper}>
      <Outlet />
    </div>
  );
};

export default Layout;

import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CoursesPage from "./CoursesPage";
import Layout from "./Layout";
import OneCoursePage from "./OneCoursePage";

type PropsType = {
  name?: string;
  count?: number;
};

export const RemoteApp = (props: PropsType) => {
  const { name, count } = props;
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route
          index
          element={
            <div className="remote_links_menu">
              <Link to="buttons">GO TO {name}</Link>
              <Link to="courses">GO TO COURSE PAGE {count}</Link>
            </div>
          }
        />

        <Route path={"courses"} element={<CoursesPage />} />
        <Route path={"/courses/:id/*"} element={<OneCoursePage />} />
      </Route>

      <Route
        path={"*"}
        element={
          <>
            <p>NOT FOUND</p>
          </>
        }
      />
    </Routes>
  );
};

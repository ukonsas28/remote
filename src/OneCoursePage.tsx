import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const OneCoursePage = () => {
  return (
    <>
      <div>
        <h1>Course Page</h1>
        <div>
          <p>
            Lorem ipsum urna ipsum, ut sed risus commodo metus maecenas integer
            nibh nulla tellus non morbi vitae ornare, vitae&nbsp;&mdash; massa
            cursus malesuada quam tempus. Molestie curabitur eros nibh cursus
            ligula proin eget sit, bibendum mattis urna: massa a risus commodo
            mattis. Auctor enim, arcu magna quisque pharetra rutrum duis massa,
            diam eu, nulla integer lectus malesuada quisque curabitur,
            pellentesque metus magna molestie. At, nec ultricies orci nulla,
            auctor, eros, a urna enim fusce justo, mattis eros. Metus ut
            bibendum gravida a eros, in odio gravida lectus odio arcu porttitor
            risus ligula curabitur non vivamus, gravida curabitur sapien sed
            pharetra&nbsp;&mdash; arcu molestie. Morbi diam, duis, eu ultricies
            fusce mattis auctor quam morbi: duis nulla sagittis porttitor
            adipiscing sapien, ipsum sapien, sodales et maecenas, non nec.
          </p>
          <div className="remote_course_footer">
            <Link to="../courses">Go Back</Link>
            <Link to="../buttons">Go to buttons</Link>
            <Link to="test">На третий уровень</Link>
            <Link to="test2">На третий уровень 2</Link>
          </div>
          <Outlet />
        </div>
      </div>
      <Routes>
        <Route
          path="test"
          element={
            <>
              <Link to="../">Убрать третий уровень</Link>
            </>
          }
        />
        <Route
          path="test2"
          element={
            <>
              <Link to="/first">Перейти на главную REMOTEAPP</Link>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default OneCoursePage;

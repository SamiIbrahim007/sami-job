import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      {/* add things like Navbar */}
     
      {/* <h1>home layout</h1> */}
      <Outlet />
    </div>
  );
};
export default HomeLayout;

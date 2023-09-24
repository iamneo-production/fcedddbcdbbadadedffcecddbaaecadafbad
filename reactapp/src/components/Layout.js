import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="nav-menu">
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Registration">Registration</Link>
          </li>
          <li>
            <Link to="/Homepage">Homepage</Link>
          </li>
          <li>
            <Link to="/Myorder">My order</Link>
          </li>
          <li>
            <Link to="/PlaceOrder">Place order</Link>
          </li>
          <li>
            <Link to="/AdminGifts">Admin gifts</Link>
          </li>
          <li>
            <Link to="/AdminThemes">Admin themes</Link>
          </li>
          <li>
            <Link to="/Adminvieworders">Admin view orders</Link>
          </li>
          <li>
            <Link to="/Payment">Payment</Link>
          </li>
          <li>
            <Link to="/ThankYou">Thank you</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
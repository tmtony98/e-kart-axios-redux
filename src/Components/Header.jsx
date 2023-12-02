import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  //
  const Wishlist = useSelector((state) => state.wishlistReducer);
  const cart = useSelector ((state)=>state.cartReducer)
  return (
    <>
      <nav
        style={{ zIndex:"2" }}
        className="navbar top-0 bg-primary navbar-expand-lg d-flex  position-fixed w-100"
      >
        <div className="container-fluid d-flex justify-content-center">
          <a className="navbar-brand fw-bold" href="#">
            TeeRex Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse d-flex justify-content-end mx-5  navbar-collapse"
            id="navbarNav">
            <ul className="navbar-nav d-flex flex-end">
              <li className="nav-item">
                <Link
                  to={"/Wishlist"}
                  className="btn btn-outline-light fs-5 mx-2 "
                >
                  Wishlist
                  <span className="m-1 text-primary badge bg-light  rounded-pill">
                    {Wishlist?.length}
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={'/cart'}
                  className="btn btn-outline-light fs-5 mx-2 "
                >
                  Cart
                  <span className="m-1 text-primary badge bg-light  rounded-pill">
                    {cart?.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

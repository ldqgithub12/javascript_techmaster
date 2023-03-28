import React from "react";

function Header() {
  return (
    <div className="header d-flex align-items-center">
      <div className="container">
        <div className="d-flex justify-content-start align-items-center">
          <div className="logo">
            <Link to={"/khoa-hoc"}>
              <img
                src="https://techmaster.vn/resources/image/logo-techmaster/white/white_200x74.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div className="menu">
              <a
                className="text-white text-uppercase ms-5"
                href="./course-onlab-list.html"
              >
                Phòng lab
              </a>
              <a
                className="text-white text-uppercase ms-3"
                href="./course-online-list.html"
              >
                Trực tuyến
              </a>
            </div>
            <div className="cart">
              <a className="text-white position-relative" href="/gio-hang">
                <span className="fs-5">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="cart-count bg-info px-1 rounded-2 position-absolute">
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

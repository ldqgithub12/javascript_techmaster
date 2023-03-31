import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header d-flex align-items-center">
      <div className="container-fluid">
        <div className="d-flex justify-content-start align-items-center">
          <div className="logo">
            <Link to={"/khoa-hoc"}>
              <img
                src="https://techmaster.vn/resources/image/logo-techmaster/white/white_200x74.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="menu">
            <a className="text-white ms-5" href="./course-list.html">
              Danh sách khóa học
            </a>
            <a className="text-white ms-3" href="./course-create.html">
              Tạo khóa học
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from 'react-pro-sidebar';

const Header = () => {

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src="/assets/img/logo.png" alt="Logo" />
          </a>
          <a href="index.html" className="logo logo-small">
            <img
              src="/assets/img/logo-small.png"
              alt="Logo"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div className="menu-toggle">
          <a href="" id="toggle_btn" onClick={() => collapseSidebar()}>
            <i className="fas fa-bars" />
          </a>
        </div>

        <ul className="nav user-menu">
          <li className="nav-item dropdown has-arrow new-user-menus">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtp36BtdqybuCc5plSuHOfDv_t5xRIUAHheEbviGy_uRD3sCZDa-eCAPHTICCphaFyMME&usqp=CAU"
                  width={31}
                  alt="Ryan Taylor"
                />
                <div className="user-text">
                  <h6>Admin Name</h6>
                </div>
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtp36BtdqybuCc5plSuHOfDv_t5xRIUAHheEbviGy_uRD3sCZDa-eCAPHTICCphaFyMME&usqp=CAU"
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a className="dropdown-item" href="inbox.html">
                Inbox
              </a>
              <a className="dropdown-item" href="login.html">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

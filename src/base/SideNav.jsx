import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";

import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div style={{ display: "flex", height: "100%" }}>
            <Sidebar>
              <li className="menu-title mt-3">
                <span>Main Menu</span>
              </li>
              <Menu>
                {/* ----------------------------- Dashboard---------------------------------- */}
                <MenuItem icon={<i className="feather-grid"></i>}>
                  <span> Dashboard</span>
                </MenuItem>
                {/* ------------------------------------------------------------------------- */}

                {/* ----------------------------- Students---------------------------------- */}
                <SubMenu label="Students" icon={<i className="fas fa-user"></i>}>
                  <NavLink
                    to="/students/showstudents"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem>Show Students</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/students/addstudents"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem>Add Students</MenuItem>
                  </NavLink>
                </SubMenu>
                {/* ------------------------------------------------------------------------- */}

                {/* ----------------------------- Fees---------------------------------- */}
                <SubMenu
                  label="Fees"
                  icon={<i className="fas fa-comment-dollar"></i>}
                >
                  <NavLink
                    to="/studentfees/showfees"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem>Show Fees</MenuItem>
                  </NavLink>
                </SubMenu>
                {/* ------------------------------------------------------------------------- */}

                {/* ----------------------------- Tests---------------------------------- */}
                <SubMenu
                  label="Tests"
                  icon={<i className="fas fa-clipboard-list"></i>}
                >
                  <NavLink
                    to="/studenttest/showtest"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem>Show Tests</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/studenttest/Addtest"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem>Add Tests</MenuItem>
                  </NavLink>
                </SubMenu>
                {/* ------------------------------------------------------------------------- */}
                
                {/* ----------------------------- more---------------------------------- */}
                <SubMenu
                  label="More"
                  icon={<i className="fas fa-circle"></i>}
                >
                  <NavLink
                    to="/more/standard"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem>Standard</MenuItem>
                  </NavLink>
                </SubMenu>
                {/* ------------------------------------------------------------------------- */}
              </Menu>
            </Sidebar>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;

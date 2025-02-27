import React from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { SideBarWrapper, LinksContainer } from "./sidebar.styled";

import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser, FaAddressBook } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineStar } from "react-icons/ai";
import { HiArrowNarrowLeft } from "react-icons/hi";

const _links = [
  {
    path: "/dashboard",
    name: "Search",
    icon: <IoSearchOutline />
  },

  {
    path: "/dashboard/history",
    name: "history",
    icon: <FaAddressBook />
  },

  {
    path: "/dashboard/top-rank",
    name: "Rank",
    icon: <AiOutlineStar />
  },

  {
    path: "/dashboard/profile",
    name: "Profile",
    icon: <FaRegUser />
  },

  {
    path: "/dashboard/settings",
    name: "Settings",
    icon: <IoSettingsOutline />
  }
];

const SideBar = (props) => {
  const { sideBarOpen, setSideBarOpen } = props;
  const { pathname } = useLocation();

  return (
    <SideBarWrapper close={sideBarOpen}>
      <button
        onClick={() => setSideBarOpen(!sideBarOpen)}
        className="close__btn">
        <HiArrowNarrowLeft />
      </button>

      <LinksContainer>
        {_links.map((link, index) => {
          const { path, name, icon } = link;

          return (
            <NavLink
              className={pathname === path ? "isActive" : ""}
              key={index}
              to={path}>
              <div className="link__wrap">
                <span className="icon">{icon}</span>
                <span data-text={name} className="text">
                  {name}
                </span>
              </div>
            </NavLink>
          );
        })}

        <div className="link__wrap">
          <span className="icon">
            <AiOutlineLogout />
          </span>
          <span data-text="Logout" className="text">
            Logout
          </span>
        </div>
      </LinksContainer>
    </SideBarWrapper>
  );
};

SideBar.propTypes = {
  sideBarOpen: PropTypes.bool,
  setSideBarOpen: PropTypes.func
};
export default SideBar;

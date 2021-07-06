import React from "react";
import {Fade} from "react-reveal";
import {
  NavLink,
  Link
} from "react-router-dom";

import {logoName} from "../../constants";

import styles from "./Header.module.css";


const Header = () => {
  const menuContent = [
    {
      id: 1,
      name: "Home",
      route: "/"
    },
    // {
    //   id: 2,
    //   name: "Education",
    //   route: "/education"
    // },
    // {
    //   id: 3,
    //   name: "Experience",
    //   route: "/experience"
    // },
    {
      id: 4,
      name: "Projects",
      route: "/projects"
    },
    // {
    //   id: 5,
    //   name: "Contact & Resume",
    //   route: "/contact"
    // }
  ];

  return (
    <Fade top duration={1000}>
      <header className={styles.header}>
        <NavLink
          to={"/"}
          tag={Link}
          className={styles.logo}
        >
          <span
            className={styles.logoName}
          >
            {logoName}
          </span>
        </NavLink>
        <input className={styles.menuButton} type="checkbox" id="menu-btn" />
        <label className={styles.menuIcon} htmlFor="menu-btn">
          <span className={styles.navIcon}></span>
        </label>
        <ul className={styles.menu}>
          {
            menuContent.map((datum) => (
              <li key={datum.id}>
                <NavLink
                  exact
                  className={styles.menuItem}
                  to={datum.route}
                  tag={Link}
                  activeClassName={styles.activeItem}
                >
                  {datum.name}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </header>
    </Fade>
  );
};

export default Header;



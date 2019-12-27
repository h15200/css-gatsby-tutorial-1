import React from "react"
import navStyles from '../styles/layout/nav.module.scss';

const Nav = () => (
    <div className={navStyles.navigation}>
      <input
        type="checkbox"
        className={navStyles.navigation_checkbox}
        id="naviToggle"
      />
      <label htmlFor="naviToggle" className={navStyles.navigation_button}>
        <span className={navStyles.navigation_icon}>&nbsp;</span>
      </label>
      <div className={navStyles.navigation_background}>&nbsp;</div>
      <nav className={navStyles.navigation_nav}>
        <ul className={navStyles.navigation_list}>
          <li className={navStyles.navigation_item}>
            <a href="#" className={navStyles.navigation_link}>
            <span>01</span>
              About Natours
            </a>
          </li>
          <li className={navStyles.navigation_item}>
            <a href="#" className={navStyles.navigation_link}>
            <span>02</span>
              Your benefits
            </a>
          </li>
          <li className={navStyles.navigation_item}>
            <a href="#" className={navStyles.navigation_link}>
            <span>03</span>
              Popular tours
            </a>
          </li>
          <li className={navStyles.navigation_item}>
            <a href="#" className={navStyles.navigation_link}>
            <span>04</span>
              Stories
            </a>
          </li>
          <li className={navStyles.navigation_item}>
            <a href="#" className={navStyles.navigation_link}>
            <span>05</span>
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
)

export default Nav

import React, { useState } from 'react';
import { UserContext } from './UserContext';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = (e) => {
    e.currentTarget.classList.toggle('active');
    const siblings = Array.from(e.currentTarget.parentNode.children);
    siblings.forEach((sibling) => {
      if (sibling !== e.currentTarget) {
        sibling.classList.remove('active');
        const subMenu = sibling.querySelector('ul');
        if (subMenu) {
          subMenu.style.display = 'none';
        }
      }
    });

    const subMenu = e.currentTarget.querySelector('ul');
    if (subMenu) {
      subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
    }
  };

  const handleMenuBtnClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`}>
      <div className="sidebar">
        <div className="menu-btn" onClick={handleMenuBtnClick}>
          <i className={`ph-bold ph-caret-left ${isActive ? 'active' : ''}`}></i>
        </div>
        <div className="head">
          <div className="user-img">
            <img src="user.jpg" alt="" />
          </div>
          <div className="user-details">
            <h3><p className="title">Welcome</p></h3>
            <p className="name"></p>
          </div>
        </div>
        <div className="nav">
          <div className="menu">
            <p className="title">Main</p>
            <ul>
              <li>
                  <i className="icon ph-bold ph-house-simple"></i>
                  <Link to="/req">
                  <span className="text">LOU Request</span>
                  </Link>
              </li>
              <li>
              
              <i className="icon ph-bold ph-user"></i>
              <Link to="/trans">
                <span className="text">Transaction History</span>
                </Link>
                <i className="arrow ph-bold ph-caret-down"></i>
              
                <ul className="sub-menu">
                  <li>
                    <a href="#">
                      <span className="text">Users</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="text">Subscribers</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="active">
                <a href="#">
                  <i className="icon ph-bold ph-file-text"></i>
                  <span className="text">Desktop</span>
                </a>
              </li>
              <li>
                  <i className="icon ph-bold ph-calendar-blank"></i>
                  <Link to="/loan">
                  <span className="text">Loan</span>
                  </Link>
              </li>
            </ul>
          </div>
          <div className="menu">
          <br></br><br></br>
            <p className="title">Settings</p>
            <ul>
              <li>
                <a href="#">
                  <i className="icon ph-bold ph-gear"></i>
                  <span className="text">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu">
          <p className="title">Account</p>
          <ul>
            <li>
              <a href="#">
                <i className="icon ph-bold ph-info"></i>
                <span className="text">Help</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon ph-bold ph-sign-out"></i>
                <span className="text">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

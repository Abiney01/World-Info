import React from 'react'
import footerData from "../../api/footerData.json"
import { IoCallSharp } from "react-icons/io5"
import { MdPlace } from "react-icons/md"
import { TbMailPlus } from "react-icons/tb"
import { NavLink } from "react-router-dom"

function Footer() {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  }

  return (
    <footer className='footer-section'>
      <div className='container grid grid-three-cols footer-content-wrapper'>
        {footerData.map((curData, index) => {
          const { icon, title, details } = curData
          return (
            <div className='footer-contact' key={index}>
              <div className='footer-contact-item'>
                <span className='icon'>{footerIcon[icon]}</span>
                <div className='footer-contact-text'>
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2025, All Right Reserved
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="https://www.instagram.com/" target="_blank">Social</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

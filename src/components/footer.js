import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p><strong><Link to="/">e-sportgames.se</Link></strong>, gjord med <span className="icon -love"><RiHeart2Line/></span> ©2020</p>
    </div>
  </footer>
)

export default Footer
import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine, RiSkullLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }}/>
        <h1>Oops...</h1>
        <p>sidan du ville åt verkar inte finnas.</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Tillbaka till sidan</Link>
     
    </div>
  </Layout>
)

export default NotFound
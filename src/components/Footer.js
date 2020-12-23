import React from 'react'
import { Link } from 'gatsby'


import logo from '../img/logo-white.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
      <div style={{ maxWidth: '100vw', maxheight: '100px' }} className="columns is-vcentered">
        <div className="column is-4">
          <div className="content has-text-centered">
            <img
              src={logo}
              alt="Engineer iQ"
              style={{ width: '36.6em', padding: '3em' }}
            />
          </div>
        </div>
        <div className="column is-4">
          <div className="content has-text-centered has-background-black has-text-white-ter">
            <div className="container has-background-black has-text-white-ter">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/whatwedo#title" className="navbar-item has-text-weight-bold">
                        What We Do
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/whatwedo#rfq-development">
                        RFQ Development
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/whatwedo#sustainable-solutions">
                        Sustainable Solutions
                      </Link>
                    </li>
                    <li>
                    <Link className="navbar-item" to="/whatwedo#performance">
                      Performance Improvement Projects
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/whatwedo#site-audits">
                      Site Audits
                    </Link>
                  </li>
                    <li>
                      <Link className="navbar-item" to="/whatwedo#project-management">
                        Project Management
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
          <div className="column is-4">
          <div className="content has-text-centered has-background-black has-text-white-ter">
            <div className="container has-background-black has-text-white-ter">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/#about-section">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/whatwedo#title">
                        What We Do
                      </Link>
                    </li>
                    <li>
                    <Link className="navbar-item" to="/blog#title">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/team#title">
                      Our Team
                    </Link>
                  </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <h5 style={{
          paddingBottom: '1em',
          paddingLeft: '1em',
          paddingRight: '1em',
          fontSize: '0.8em'
        }} className="has-text-white-ter has-text-centered">Copyright © Engineeering iQ Ltd. | Registered in England No. 12641286. VAT no. 360708406 | Address: 3 Spring Cottages, London Road, Crowborough, East Sussex, TN6 1UT.</h5>
      </footer>
    )
  }
}

export default Footer

import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

import arla from "../../../static/img/arla.png"
import benna from "../../../static/img/benna.jpg"
import fdt from "../../../static/img/fdt.png"
import mccormick from "../../../static/img/mccormick.jpg"
import muller from "../../../static/img/muller.png"
import gemak from "../../../static/img/gemak.png"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/tank-farm-1.jpg')`,
          }}
        >
        </div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-12">
                <div id="title"
                className="has-text-justified"
                style={{
                  padding: '1em',
                }}>
                  <span
                    className="has-text-weight-bold is-size-1-mobile is-size-1-tablet is-size-1-widescreen"
                    style={{
                      color: 'black',
                      lineHeight: '1',
                      padding: '0.25em',
                    }}
                  >
                  Case Studies
                  </span>
                </div>
              </div>
            </div>
            <div className="content">
              <BlogRoll />
            </div>
          </div>
          <div className="content">
              <div className="columns is-centered">
               <div className="column is-10">
                  <h1 className="has-text-centered">Trusted by</h1>
                  <div className="columns is-centered">
                    <div className="column has-text-centered is-2">
                      <img src={arla} alt='Arla logo'/>
                    </div>
                    <div className="column has-text-centered is-2">
                      <img src={benna} alt='Benna logo'/>
                    </div>
                    <div className="column has-text-centered is-2">
                      <img src={fdt} alt='FDT logo'/>
                    </div>
                    <div className="column has-text-centered is-2">
                      <img src={gemak} alt='Gemak logo'/>
                    </div>
                    <div className="column has-text-centered is-2">
                      <img src={mccormick} alt='Mccormick logo'/>
                    </div>
                    <div className="column has-text-centered is-2">
                      <img src={muller} alt='Muller logo'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </Layout>
    )
  }
}

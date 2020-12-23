import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

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
        </section>
      </Layout>
    )
  }
}

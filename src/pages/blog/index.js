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
        <div id="title"
          className="has-text-centered"
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
            News
            </span>
          </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

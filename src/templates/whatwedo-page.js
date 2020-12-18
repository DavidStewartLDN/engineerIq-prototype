import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import WhatWeDoItems from '../components/WhatWeDoItems'

export const WhatWeDoTemplate = ({
  title,
  heading,
  description,
  topic,
}) => (
  <div>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url('/img/tank-farm-1.jpg')`,
      }}
    >
  </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div id="title"
                className="has-text-justified"
                style={{
                  padding: '1em',
                }}
              >
                <span
                  className="has-text-weight-bold is-size-1-mobile is-size-1-tablet is-size-1-widescreen"
                  style={{
                    color: 'black',
                    lineHeight: '1',
                    padding: '0.25em',
                  }}
                >
                What We Do
                </span>
              </div>
              <div className="content">
                <WhatWeDoItems gridItems={topic.sections} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

WhatWeDoTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  topic: PropTypes.shape({
    sections: PropTypes.array,
  }),
}

const WhatWeDoPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <WhatWeDoTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        topic={frontmatter.topic}
      />
    </Layout>
  )
}

WhatWeDoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default WhatWeDoPage

export const pageQuery = graphql`
  query WhatWeDoTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "whatwedo-page" } }) {
      frontmatter {
        title
        heading
        description
        topic {
          sections {
            image {
              childImageSharp {
                fluid(maxWidth: 720, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            text
          }
        }
      }
    }
  }
`

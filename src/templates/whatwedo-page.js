import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import WhatWeDoSimpleA from '../components/WhatWeDoSimpleA'
import WhatWeDoSimpleB from '../components/WhatWeDoSimpleB'
import WhatWeDoSustainable from '../components/WhatWeDoSustainable'

const sections = ['rfq-development','sustainable-solutions','performance','site-audits','project-management']

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
                <div className="columns is-multiline">
                  <WhatWeDoSimpleA item={topic.sections[0]} sectionID={sections[0]}/>
                  <WhatWeDoSustainable item={topic.sections[1]} sectionID={sections[1]} />
                  <WhatWeDoSimpleA item={topic.sections[2]} sectionID={sections[2]}/>
                  <WhatWeDoSimpleB item={topic.sections[3]} sectionID={sections[3]}/>
                  <WhatWeDoSimpleA item={topic.sections[4]} sectionID={sections[4]}/>
                </div>
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

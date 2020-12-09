import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import WhatWeDoItems from '../components/WhatWeDoItems'

export const WhatWeDoTemplate = ({
  title,
  heading,
  description,
  people,
}) => (
  <div>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url('/img/tank-farm-1.jpg')`,
      }}
    >
    <h1
      className="has-text-weight-bold is-size-1"
      style={{
        boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
        backgroundColor: '#f40',
        color: 'white',
        padding: '1rem',
      }}
    >
    What we do
    </h1>
  </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <WhatWeDoItems gridItems={people.profiles} />
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
  people: PropTypes.shape({
    profiles: PropTypes.array,
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
        people={frontmatter.people}
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
        people {
          profiles {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            text
          }
        }
      }
    }
  }
`

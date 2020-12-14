import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Profiles from '../components/Profiles'

export const TeamPageTemplate = ({
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
  </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
            <div
            className="has-text-justified"
            style={{
              padding: '1em',
              paddingBottom: '3em',
            }}
          >
            <span
              className="has-text-weight-bold is-size-1-mobile is-size-1-tablet is-size-1-widescreen"
              style={{
                boxShadow:
                  'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                backgroundColor: 'rgb(255, 68, 0)',
                color: 'white',
                lineHeight: '1',
                padding: '0.25em',
              }}
            >
            Our Team
            </span>
          </div>
              <div className="content">
                <div className="columns">
                  <div className="column is-12">
                    <p>{description}</p>
                  </div>
                </div>
                <Profiles gridItems={people.profiles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

TeamPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  people: PropTypes.shape({
    profiles: PropTypes.array,
  }),
}

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TeamPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        people={frontmatter.people}
      />
    </Layout>
  )
}

TeamPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeamPage

export const pageQuery = graphql`
  query TeamPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "team-page" } }) {
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

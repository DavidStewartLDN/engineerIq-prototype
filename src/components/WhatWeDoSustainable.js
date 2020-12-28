import React from 'react'
import PropTypes from 'prop-types'
import SustainableVideo from "../../static/videos/automation-new.mp4"

const WhatWeDoSustainable = ({ item, sectionID }) => (
      <div id={sectionID} key={item.text} className="columns is-mobile is-multiline is-vcentered pt-6">
        <div className="column">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
        <div className="column">
          <div className="is-desktop is-vcentered">
            <video className="is-desktop is-vcentered" autoPlay muted loop>
              <source src={SustainableVideo} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
)

WhatWeDoSustainable.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    text: PropTypes.string,
  })
}

export default WhatWeDoSustainable



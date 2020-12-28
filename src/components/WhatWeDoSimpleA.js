import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const WhatWeDoSimpleA = ({ item, sectionID }) => (
      <div id={sectionID} key={item.text} className="columns is-mobile is-multiline is-vcentered pt-6">
        <div className="column">
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <div className="column">
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      </div>
)

WhatWeDoSimpleA.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    text: PropTypes.string,
  })
}

export default WhatWeDoSimpleA

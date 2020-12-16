import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const sections = ['rfq-development','sustainable-solutions','performance','site-audits','project-management']

const WhatWeDoGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, index) => (
      <div id={sections[index]} key={item.text} className="columns is-mobile is-multiline is-vcentered pt-6">
        {index % 2 === 0 ? (
          <>
            <div className="column">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div className="column">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          </>
          ) : (
            <>
            <div className="column">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
            <div className="column">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </>
          )}
      </div>
    ))}
  </div>
)

WhatWeDoGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default WhatWeDoGrid

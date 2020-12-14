import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

var id = 0;

const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

function getId() {
  console.log(id)
  return id++;
}

const WhatWeDoGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="columns is-mobile is-multiline is-vcentered pt-6">
        {getId() % 2 == 0 ? (
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

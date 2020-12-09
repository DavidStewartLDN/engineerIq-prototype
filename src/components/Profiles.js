import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const ProfileGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="columns is-mobile is-multiline is-vcentered">
          <div className="column">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div className="column">
            <span>{item.text}</span>
          </div>
      </div>
    ))}
  </div>
)

ProfileGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default ProfileGrid

import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

const ProfileGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, index) => (
      <div key={item.text} className="columns is-mobile is-multiline is-vcentered">
        {index % 2 === 0 ? (
          <>
            <div className="column">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div className="column">
              <h1>{item.name}</h1>
              <NewlineText text={item.text}></NewlineText>
            </div>
          </>
          ) : (
          <>
            <div className="column">
              <h1>{item.name}</h1>
              <NewlineText text={item.text}></NewlineText>
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

ProfileGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default ProfileGrid

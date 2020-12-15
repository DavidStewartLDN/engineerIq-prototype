import React from 'react'
import PropTypes from 'prop-types'

import EngIqVideo from "../../static/videos/eng-iq.mp4"

const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

const AboutGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="columns is-mobile is-multiline is-vcentered">
        <div className="column is-6">
          <h1>{item.name}</h1>
          <NewlineText text={item.text}></NewlineText>
        </div>
        <div className="column is-6">
          <div className="is-desktop is-vcentered">
            <video className="is-desktop is-vcentered" width="1080" controls autoPlay muted>
              <source src={EngIqVideo} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    ))}
  </div>
)

AboutGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default AboutGrid

import PropTypes from 'prop-types';
import React from 'react';

// function Header(props) {
//   return (
//     <header>
//         <div className="container">
//             <h2>{props.text}</h2>
//         </div>
//     </header>
//   )
// }

function Header({ text,bgColor,textColor }) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
      <header style={headerStyles}>
          <div className="container">
              <h2>{text}</h2>
          </div>
      </header>
    )
}

Header.defaultProps = {
    text : 'FeedBack UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: "#ff6a95",
}

Header.propTypes = {
    text : PropTypes.string,
    bgColor: PropTypes.string,
    text: PropTypes.string
}

export default Header
import PropTypes from 'prop-types';

// function Header(props) {
//   return (
//     <header>
//         <div className="container">
//             <h2>{props.text}</h2>
//         </div>
//     </header>
//   )
// }

function Header({ text }) {
    return (
      <header>
          <div className="container">
              <h2>{text}</h2>
          </div>
      </header>
    )
}

Header.defaultProps = {
    text : 'FeedBack UI',
}

Header.propTypes = {
    text : PropTypes.string
}

export default Header